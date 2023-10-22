"use client";

import { ArrowUpTrayIcon, CheckIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState, ChangeEvent, DragEvent } from "react";

interface FileDragDropProps {
  // Add any props you may need here
}

const FileDragDrop: React.FC<FileDragDropProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleUpload = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setSelectedFile(droppedFile);
    }
  };

  return (
    <>
      <div
        onClick={handleUpload}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="flex h-[30vh] items-center justify-center"
      >
        <div className="w-full px-6 sm:w-3/4 lg:w-2/3 lg:px-8 xl:w-1/2">
          <div className="flex h-[40vh] items-center justify-center rounded-lg border border-dashed border-gray-900/25">
            <div className="text-center">
              <div className="text-center">
                {selectedFile ? (
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                  </div>
                ) : (
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF2FF]">
                    <ArrowUpTrayIcon className="w-5 h-5 text-jobster-indigo " />
                  </div>
                )}
                <div className="mt-3 sm:mt-5">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    {selectedFile
                      ? "Resume uploaded successfully"
                      : "Drag and Drop To Upload"}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <a href="https://storage.cloud.google.com/mercor_dashboard_data/chandrakantkofficial%40gmail.com_resume.pdf">
                        {selectedFile && selectedFile.name}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <label
                    htmlFor="file-upload"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <input
                      type="file"
                      className="hidden"
                      ref={inputRef}
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                    Update your resume
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileDragDrop;
