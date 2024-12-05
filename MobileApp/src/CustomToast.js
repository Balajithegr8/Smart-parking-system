// CustomToast.js
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ toastMessage, toastType }) => {
  // Automatically trigger toast when the component is rendered
  useEffect(() => {
    if (toastMessage) {
      if (toastType === 'success') {
        toast.success(toastMessage, {
          position: 'top-right',  
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'custom-toast',
          bodyClassName: 'custom-toast-body',
        });
      } else if (toastType === 'error') {
        toast.error(toastMessage, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'custom-toast',
          bodyClassName: 'custom-toast-body',
        });
      }
    }
  }, [toastMessage, toastType]);  // Trigger effect when toastMessage or toastType changes

  return null;  // No button needed, just return null since the toast is handled
};

export default CustomToast;
