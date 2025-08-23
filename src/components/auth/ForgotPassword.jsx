import React, { useState } from "react";
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [forgotEmail, setForgotEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [forgotEmailError, setForgotEmailError] = useState('');
    const [accountNotFound, setAccountNotFound] = useState(false);
    const [resetEmailSent, setResetEmailSent] = useState(false);

    const validateEmail = (email, isForForgot = false) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.includes('@')) {
            const errorMsg = "Vui lòng bao gồm '@' trong địa chỉ email. "+email+" bị thiếu '@'.";
            if (isForForgot) {
                setForgotEmailError(errorMsg);
            } else {
                setEmailError(errorMsg);
            }
            return false;
        }
        if (!emailRegex.test(email)) {
            const errorMsg = "Vui lòng nhập địa chỉ email hợp lệ.";
            if (isForForgot) {
                setForgotEmailError(errorMsg);
            } else {
                setEmailError(errorMsg);
            }
            return false;
        }
        if (isForForgot) {
            setForgotEmailError('');
        } else {
            setEmailError('');
        }
        return true;
    };

    const handleLogin = () => {
        if (validateEmail(email, false)) {
            if (email.toLowerCase().includes('test')) {
                setAccountNotFound(true);
            } else {
                console.log('Login successful');
            }
        }
    };

    const handleForgotPassword = () => {
        if (validateEmail(forgotEmail, true)) {
            setResetEmailSent(true);
            setAccountNotFound(false);
        } else if (forgotEmail.toLowerCase().includes('notfound')) {
            setAccountNotFound(true);
            setResetEmailSent(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
        setAccountNotFound(false);
    };

    const handleForgotEmailChange = (e) => {
        setForgotEmail(e.target.value);
        setForgotEmailError('');
        setAccountNotFound(false);
        setResetEmailSent(false);
    };

    return (
       
        
               <div className="bg-gray-50 flex items-center justify-center py-8 px-4">
            <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-6">
                    <h1 className="text-xl font-bold text-gray-800 mb-2">ĐĂNG NHẬP</h1>
                    <p className="text-gray-600">
                        Nếu bạn chưa có tài khoản, {' '}
                        <a href="#" className="text-[#b4805d] hover:text-gray-600">
                            đăng ký tại đây
                        </a>
                    </p>
                </div>

                
                <div className="space-y-4 mb-6">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className={`w-full px-3 py-2.5 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-sm ${
                                emailError 
                                    ? 'border-red-300 focus:ring-red-500' 
                                    : 'border-gray-200 focus:ring-orange-500'
                            }`}
                        />
                        {emailError && (
                            <div className="mt-2 p-2 bg-orange-100 border border-orange-300 rounded-md">
                                <div className="flex items-start">
                                    <span className="text-orange-600 font-bold mr-2">!</span>
                                    <span className="text-orange-800 text-sm">{emailError}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2.5 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        />
                    </div>

                    <button onClick={handleLogin} className= "w-full bg-[#ad7555] text-white font-medium py-2.5 rounded-md border border-[#ad7555] hover:bg-white hover:text-[#ad7555] transition duration-200 text-sm">
                        Đăng nhập
                    </button>
                </div>

            
                <div className="space-y-4">
                    <div className="text-center">
                        <a href="#" className="text-gray-500 hover:text-[#b4805d] ">Quên mật khẩu</a>
                    </div>

                    {accountNotFound && (
                        <div className="mb-4">
                            <p className="text-red-600 text-sm font-medium">
                                Không tìm thấy tài khoản tương ứng với email này.
                            </p>
                        </div>
                    )}

                    {resetEmailSent && (
                        <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-md">
                            <p className="text-green-800 text-sm">
                                Chúng tôi đã gửi 1 email đến bạn. Vui lòng kiểm tra để đặt lại mật khẩu
                            </p>
                        </div>
                    )}

                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={forgotEmail}
                            onChange={handleForgotEmailChange}
                            className={`w-full px-3 py-2.5 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-sm ${
                                forgotEmailError 
                                    ? 'border-red-300 focus:ring-red-500' 
                                    : 'border-gray-200 focus:ring-orange-500'
                            }`}
                        />
                        {forgotEmailError && (
                            <div className="mt-2 p-2 bg-orange-100 border border-orange-300 rounded-md">
                                <div className="flex items-start">
                                    <span className="text-orange-600 font-bold mr-2">!</span>
                                    <span className="text-orange-800 text-sm">{forgotEmailError}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <button 
                        onClick={handleForgotPassword}
                        className= "w-full bg-[#ad7555] text-white font-medium py-2.5 rounded-md border border-[#ad7555] hover:bg-white hover:text-[#ad7555] transition duration-200 text-sm"
                    >
                        Lấy lại mật khẩu
                    </button>

                    <div className="text-center">
                        <p className="text-gray-600 mb-3 text-sm">Hoặc đăng nhập bằng</p>
                        <div className="flex">
                            <div className="flex-1 px-4"> 
                                <button className=" w-full bg-[#3b5998] hover:bg-blue-700 text-white py-1 flex items-center justify-center space-x-3 transition duration-200 text-sm">
                                <span className="pr-3 border-r border-[#2a498c]"><i class="fa-brands fa-facebook-f"></i></span>
                                <span>Facebook</span>
                            </button>
                            </div>
                            <div className="flex-1 px-4">
                                <button className=" w-full bg-[#e14b33] hover:bg-red-600 text-white py-1 flex items-center justify-center space-x-3 transition duration-200 text-sm">
                                <span className="pr-3 border-r border-[#ce452f]"><i class="fa-brands fa-google-plus-g"></i></span>
                                <span>Google</span>
                            </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;