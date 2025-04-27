"use client";

import { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignatureDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signature, setSignature] = useState<string | null | undefined>(null);
  const signCanvas = useRef<SignatureCanvas>(null);

  const handleClear = () => {
    signCanvas.current?.clear();
  };

  const handleSave = () => {
    if (signCanvas.current?.isEmpty()) {
      alert('请先签名');
      return;
    }
    const dataURL = signCanvas.current?.toDataURL();
    setSignature(dataURL);
    setIsOpen(false);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">电子签名 Demo</h1>
      
      {/* 签名预览 */}
      {signature && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">签名预览:</h2>
          <img 
            src={signature} 
            alt="签名预览" 
            className="border border-gray-300 rounded-lg"
          />
        </div>
      )}

      {/* 打开签名模态框的按钮 */}
      <button 
        onClick={() => setIsOpen(true)}
        className="btn btn-primary"
      >
        {signature ? '重新签名' : '添加签名'}
      </button>

      {/* 签名模态框 */}
      <dialog open={isOpen} className="modal">
        <div className="modal-box max-w-4xl">
          <h3 className="font-bold text-lg mb-4">请在下方签名</h3>
          
          {/* 签名画布 */}
          <div className="border border-gray-300 rounded-lg p-2">
            <SignatureCanvas
              ref={signCanvas}
              penColor="black"
              canvasProps={{
                width: 800,
                height: 300,
                className: 'w-full bg-white'
              }}
            />
          </div>

          {/* 操作按钮 */}
          <div className="modal-action">
            <button onClick={handleClear} className="btn btn-outline">
              清除
            </button>
            <button onClick={() => setIsOpen(false)} className="btn btn-outline">
              取消
            </button>
            <button onClick={handleSave} className="btn btn-primary">
              保存签名
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SignatureDemo;
