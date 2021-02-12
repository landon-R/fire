import Swal from "sweetalert2";

export const viewAlertRol = (message, icono) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  if (icono === "success") {
    Toast.fire({
      icon: icono,
      title: "Success",
      text: message,
      background: "#11d3cf",
      // iconColor: '#1fe729',
      iconColor: "#000",
      // grow: false,
    });
  } else if (icono === "error") {
    Toast.fire({
      icon: icono,
      title: "Error",
      text: message,
      background: "#fca5a5",
      iconColor: "#DC2626",
      // iconColor: '#000',
      grow: false,
    });
  } else if (icono === "warning") {
    Toast.fire({
      icon: "warning",
      title: "Warning",
      text: message,
      background: "#fbbc50",
      iconColor: "#000",
      // iconColor: '#000',
      grow: false,
    });
  } 
};


const viewAlertDelete = (message, icono) => {
  Swal.fire({
    title: "Esta seguro?",
    text: message,
    icon: icono,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};







// _______________________________________

export const viewAlertImage = (message, icono) => {
  return Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
};



export const viewAlerCenter = (message, icono) => {
  return Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    animation: "slide-from-top",
    timer: 1500,
  });
};

