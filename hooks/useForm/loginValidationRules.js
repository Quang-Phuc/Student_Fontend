export default function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.noUsername = 'Vui lòng nhập tên tài khoản!';
  }
  if (!values.password) {
    errors.noPassword = 'Vui lòng nhập mật khẩu!';
  }
  return errors;
}
