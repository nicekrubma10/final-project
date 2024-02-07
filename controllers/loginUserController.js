const bcrypt = require('bcrypt');
const User = require('../models/User');


module.exports = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });

        if (user) {
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                req.session.userId = user._id;

                if (user.role === 'เจ้าของร้าน') {
                    res.redirect('/home');
                } else if (user.role === 'พนักงาน') {
                    res.redirect('/order');
                } else {
                    res.redirect('/default');
                }
            } else {
                handleAuthenticationFailure(res);
            }
        } else {
            handleAuthenticationFailure(res);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const handleAuthenticationFailure = (res) => {
    const swalScript = `
    
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
      <script>
        document.addEventListener('DOMContentLoaded', function () {
          Swal.fire({
            title: "Authentication Failure",
            text: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
            timer: 1000,
            icon: "error",
            onClose: () => {
              window.location.href = '/login';
            }
          });
        });
      </script>
    `;
  
    res.send(swalScript);
  };
  