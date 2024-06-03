"use client";

import React, { useRef, useState } from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuDownload } from "react-icons/lu";
import Card from "../ui/card";
import { RiDeleteBin6Line } from "react-icons/ri";

const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      setFiles(Array.from(event.dataTransfer.files));
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handelDeleteFile = () => {
    setFiles([]);
  };

  return (
    <Card>
      <header className="flex justify-between items-center py-2 px-4 border-b border-[#262C3D]">
        <h1 className="text-xl">Upload File</h1>
        <button
          className="text-[#712E9A] border border-[#712E9A] rounded-md p-1.5 hover:bg-[#712E9A] hover:text-white"
          onClick={handelDeleteFile}
        >
          <RiDeleteBin6Line size={25} />
        </button>
      </header>
      <div className="text-[#712E9A] p-4 flex flex-col items-center gap-4">
        <p>Insert text to find Proofread file</p>
        <div
          className="flex flex-col gap-4 border border-[#712E9A] border-dashed w-full px-4 py-8 rounded-xl"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
        >
          <div className="flex flex-col items-center gap-2">
            <LuDownload size={30} strokeWidth={1} />
            <p>Drag pdf, doc, docx, files here or browse</p>
          </div>
          <div className="flex items-center">
            <hr className="w-full border-[#712E9A]" />
            <p className="px-8">or</p>
            <hr className="w-full border-[#712E9A]" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <HiOutlineDesktopComputer size={30} strokeWidth={1} />
            <p>Upload a file from your device</p>
          </div>
        </div>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        {files.length > 0 && (
          <div>
            <p>Selected files:</p>
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <footer className="border-t border-[#262C3D] p-4 flex justify-end">
        Words: 0
      </footer>
    </Card>
  );
};

export default FileUpload;
