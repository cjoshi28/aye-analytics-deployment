
import Swal from 'sweetalert2'


export const SuccessModal = (title, description) => {
  Swal.fire({
    icon: 'success',
    title: title || "Sucessfull",
    text: description || "",
    confirmButtonText: 'OK',
  })

}


export const WarningModal = (title, description) => {
}


export const ErrorModal = (title, description) => {
  Swal.fire({
    icon: 'error',
    iconColor: '#d63031',
    title: title,
    text: description,
    confirmButtonColor: '#3E0D79',
    confirmButtonText: 'OK',
    buttonsStyling: "false",
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show backdrop-blur-3xl',
      icon: 'swal2-icon-show'
    },
  })
}

{/* <template id="my-template">
  <swal-title>
    Save changes to "Untitled 1" before closing?
  </swal-title>
  <swal-icon type="warning" color="red"></swal-icon>
  <swal-button type="confirm">
    Save As
  </swal-button>
  <swal-button type="cancel">
    Cancel
  </swal-button>
  <swal-button type="deny">
    Close without Saving
  </swal-button>
  <swal-param name="allowEscapeKey" value="false" />
  <swal-param
    name="customClass"
    value='{ "popup": "my-popup" }' />
  <swal-function-param
    name="didOpen"
    value="popup => console.log(popup)" />
</template> */}