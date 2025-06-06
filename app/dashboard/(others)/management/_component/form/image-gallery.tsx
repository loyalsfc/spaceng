import {LucideUploadCloud} from "lucide-react";
import React from "react";
import {toast} from "sonner";

import {showSuccess} from "@/lib/utils";
import Loader from "@/components/loader/loader";
import {useUploadImage} from "@/api/upload-image";

import ImageSort from "./image-sort";

interface Props {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

function ImageGallery({images, setImages}: Props) {
  const {mutateAsync: uploadImage, isPending: isUploading} = useUploadImage();

  const handleFileUpload = async (event: React.FormEvent<HTMLInputElement>) => {
    const selectedImage = event.currentTarget.files;

    if (selectedImage) {
      if (selectedImage.length + images.length > 10) {
        toast.error("Maximum image exceeded");

        return;
      }
      const formData = new FormData();

      for (let i = 0; i < selectedImage.length; i++) {
        formData.append("images", selectedImage[i]);
      }

      await uploadImage(formData).then((res) => {
        showSuccess(res.message);
        res.data.uploadedImages.forEach((item) => {
          setImages((prevState) => [...prevState, item.url]);
        });
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <ImageSort images={images} setImages={setImages} />
        <span className="text-grey-200 block mb-2 text-left">Property Image</span>
        <div className="rounded-3xl border border-dashed border-grey-200 flex flex-col items-center gap-6 py-10 relative">
          <span className="text-sm absolute top-5 right-5">{images.length}/10</span>
          <LucideUploadCloud size={40} />
          <span>Drag and Drop up to 10 images</span>
          <span>or</span>
          <label
            className="bg-grey-200 text-white font-medium px-5 py-3 grid place-content-center w-fit rounded-md"
            htmlFor="upload-images"
          >
            {isUploading ? <Loader /> : "Browse Images"}
            <input
              multiple
              accept="image/*"
              className="hidden"
              id="upload-images"
              name="upload-images"
              type="file"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
