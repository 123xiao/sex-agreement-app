import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

export interface SignaturePadProps {
  width?: number;

  height?: number;

  penColor?: string;

  backgroundColor?: string;

  onSave?: (dataUrl: string) => void;

  onClear?: () => void;

  onCancel?: () => void;

  saveButtonText?: string;

  clearButtonText?: string;

  cancelButtonText?: string;
}

export const SignaturePad = ({
  width = 500,
  height = 200,
  penColor = "black",
  backgroundColor = "white",
  onSave,
  onClear,
  onCancel,
  saveButtonText = "保存签名",
  clearButtonText = "清除",
  cancelButtonText = "取消",
}: SignaturePadProps) => {
  const [signatureData, setSignatureData] = useState<string | null>(null);

  const signatureRef = useRef<SignatureCanvas>(null);

  const handleClear = () => {
    signatureRef.current?.clear();
    setSignatureData(null);
    onClear?.();
  };

  const handleSave = () => {
    if (!signatureRef.current || signatureRef.current.isEmpty()) {
      return;
    }

    const dataUrl = signatureRef.current.toDataURL();
    setSignatureData(dataUrl);
    onSave?.(dataUrl);
  };

  const handleCancel = () => {
    setSignatureData(null);
    onCancel?.();
  };

  return (
    <div className="signature-pad-container">
      {signatureData && (
        <div className="mb-4">
          <img
            src={signatureData}
            alt="Saved signature"
            className="border rounded-lg"
            style={{ width, height }}
          />
        </div>
      )}

      {/* Signature modal */}
      <div className="modal modal-open">
          <div className="modal-box" style={{ maxWidth: width + 100 }}>
            <h3 className="font-bold text-lg mb-4">请在下方签名</h3>

            {/* Signature canvas */}
            <div
              className="border border-gray-300 rounded-lg p-2"
              style={{ backgroundColor }}
            >
              <SignatureCanvas
                ref={signatureRef}
                penColor={penColor}
                canvasProps={{
                  width,
                  height,
                  className: "bg-white",
                }}
              />
            </div>

            {/* Action buttons */}
            <div className="modal-action">
              <button onClick={handleClear} className="btn btn-outline">
                {clearButtonText}
              </button>
              <button onClick={handleCancel} className="btn btn-outline">
                {cancelButtonText}
              </button>
              <button onClick={handleSave} className="btn btn-primary">
                {saveButtonText}
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SignaturePad;
