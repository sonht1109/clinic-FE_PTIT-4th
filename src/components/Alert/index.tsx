/**
 *
 * Alert
 *
 */
import Swal from 'sweetalert2';

interface Props {
  name: string;
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question' | undefined;
}

function Alert({ name, icon }: Props) {
  return Swal.fire({
    title: name,
    icon: icon,
    position: 'top-right',
    toast: true,
    timer: 5000,
    showConfirmButton: false,
  });
}

export { Alert };

<div className="row">
  <div className="slide-anim col-md-3 col-sm-6">
    <img src="..." alt="..." width="200" height="150" />
  </div>
  <div className="slide-anim col-md-3 col-sm-6">
    <img src="..." alt="..." width="200" height="150" />
  </div>
  <div className="slide-anim col-md-3 col-sm-6">
    <img src="..." alt="..." width="200" height="150" />
  </div>
  <div className="slide-anim col-md-3 col-sm-6">
    <img src="..." alt="..." width="200" height="150" />
  </div>
</div>;
