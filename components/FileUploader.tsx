"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

 const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt="uploaded image"
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            width={40}
            height={40}
            alt="upload"
          />
          <div className="file-upload_label">
            <p className="text-14-regular ">
              <span className="text-green-500">Click to upload </span>
              or drag and drop
            </p>
            <p className="text-12-regular">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;


// "use client";

// import Image from "next/image";
// import React, { useCallback, useEffect } from "react";
// import { useDropzone } from "react-dropzone";
// import { convertFileToUrl } from "@/lib/utils";

// type FileUploaderProps = {
//   files: File[] | undefined;
//   onChange: (files: File[]) => void;
// };

// const FileUploader = ({ files, onChange }: FileUploaderProps) => {
//   const onDrop = useCallback(
//     (acceptedFiles: File[]) => {
//       onChange(acceptedFiles);
//     },
//     [onChange]
//   );

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: {
//       "image/*": [".png", ".jpg", ".jpeg", ".gif", ".svg"],
//     },
//     maxSize: 1024 * 1024 * 2, // 2MB max size
//   });

//   useEffect(() => {
//     return () => {
//       files?.forEach(file => URL.revokeObjectURL(file));
//     };
//   }, [files]);

//   return (
//     <div {...getRootProps()} className="file-upload">
//       <input {...getInputProps()} />
//       {files && files.length > 0 ? (
//         <Image
//           src={convertFileToUrl(files[0])}
//           width={1000}
//           height={1000}
//           alt="uploaded image"
//           className="max-h-[400px] overflow-hidden object-cover"
//         />
//       ) : (
//         <>
//           <Image
//             src="/assets/icons/upload.svg"
//             width={40}
//             height={40}
//             alt="upload"
//           />
//           <div className="file-upload_label">
//             <p className="text-14-regular">
//               <span className="text-green-500">Click to upload </span>
//               or drag and drop
//             </p>
//             <p className="text-12-regular">
//               SVG, PNG, JPG or GIF (max. 800x400px)
//             </p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default FileUploader;


// "use client";

// import Image from "next/image";
// import React, { useCallback } from "react";
// import { useDropzone } from "react-dropzone";

// // Function to convert a File object to a URL string
// export const convertFileToUrl = (file: File): string => {
//   return URL.createObjectURL(file); // Blob URL
// };

// type FileUploaderProps = {
//   files: File[] | undefined;
//   onChange: (files: File[]) => void;
// };

// const FileUploader = ({ files, onChange }: FileUploaderProps) => {
//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     onChange(acceptedFiles); // Updates parent component with new files
//   }, [onChange]);

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   return (
//     <div {...getRootProps()} className="file-upload">
//       <input {...getInputProps()} />
//       {files && files.length > 0 ? (
//         <Image
//           src={convertFileToUrl(files[0])} // Convert file to URL string
//           width={1000}
//           height={1000}
//           alt="uploaded image"
//           className="max-h-[400px] overflow-hidden object-cover"
//         />
//       ) : (
//         <>
//           <Image
//             src="/assets/icons/upload.svg"
//             width={40}
//             height={40}
//             alt="upload"
//           />
//           <div className="file-upload_label">
//             <p className="text-14-regular">
//               <span className="text-green-500">Click to upload </span>
//               or drag and drop
//             </p>
//             <p className="text-12-regular">
//               SVG, PNG, JPG or GIF (max. 800x400px)
//             </p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default FileUploader;
