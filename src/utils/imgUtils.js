import { store } from '../store';
import { fetchCarouselPictures } from '../actions/carouselActions';
import { addPicture } from '../actions/carouselActions';

// Handle image change
export const handleImageChange = (e, changeInput, carousel = false) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    // .onloadend is triggered when the file is read thanks to readAsDataURL
    reader.onloadend = () => {
      const img = new Image();

      // .src & .result are the base64 string of the image
      // browser will load the image and trigger .onload
      img.src = reader.result;

      // When the image is loaded, we dispatch the action to change the input
      img.onload = () => {
        // 500Ko maximum
        const maxSize = 500000;
        const fileSize = file.size;

        if (fileSize > maxSize) {
          // canvas is a browser API to manipulate images
          const canvas = document.createElement('canvas');

          // 2D rendering context creation
          const ctx = canvas.getContext('2d');

          // Image resizing
          const scaleFactor = Math.sqrt(maxSize / fileSize); // proportionnal resizing
          canvas.width = img.width * scaleFactor;
          canvas.height = img.height * scaleFactor;

          // Draw image on canvas
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // Convert canvas to base64
          // 0.7 is the quality of the image 70%
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);

          store.dispatch(changeInput(compressedDataUrl, 'img64'));
          if (carousel) {
            store.dispatch(addPicture());
            // store.dispatch(fetchCarouselPictures()); remove
          }
        } else {
          store.dispatch(changeInput(reader.result, 'img64'));
          if (carousel) {
            store.dispatch(addPicture());
            // store.dispatch(fetchCarouselPictures()); remove
          }
        }
      };
    };

    // Read the file as a data URL (base64)
    reader.readAsDataURL(file);
  }
};
