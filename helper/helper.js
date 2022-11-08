import Swal from 'sweetalert2'
export const SuccessModal = (title, description) => {
  Swal.fire({
    icon: 'success',
    title: title || "Sucessfull",
    text: description || ""
  })
}
export const WarningModal = (title, description) => {
}
export const ErrorModal = (title, description) => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: description,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show backdrop-blur-3xl',
      icon: 'swal2-icon-show'
    }
  })
}