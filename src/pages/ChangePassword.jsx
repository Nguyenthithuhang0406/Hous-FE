import React, { useState } from "react";
import { Link } from "react-router-dom";
const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validatePassword = (password) => {
        if (password.length < 6 || password.length > 50) {
            return "Mật khẩu mới dài từ 6 đến 50 ký tự";
        }
        return null;
    };

    const validateForm = () => {
        const newErrors = {};

        if (!currentPassword.trim()) {
            newErrors.currentPassword = "Vui lòng nhập mật khẩu cũ";
        } else if (currentPassword !== "123456") { // Simulate wrong password
            newErrors.currentPassword = "Mật khẩu cũ không đúng";
        }

        
        if (!newPassword.trim()) {
            newErrors.newPassword = "Vui lòng nhập mật khẩu mới";
        } else {
            const passwordError = validatePassword(newPassword);
            if (passwordError) {
                newErrors.newPassword = passwordError;
            }
        }

        
        if (!confirmPassword.trim()) {
            newErrors.confirmPassword = "Vui lòng nhập xác nhận mật khẩu";
        } else if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = "Xác nhận mật khẩu không khớp";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            alert("Đặt lại mật khẩu thành công!");
            // Reset form
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setErrors({});
        }
    };

    const handleInputChange = (field, value) => {
        if (errors[field]) {
            setErrors({...errors, [field]: null});
        }
        
        switch(field) {
            case 'currentPassword':
                setCurrentPassword(value);
                break;
            case 'newPassword':
                setNewPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
        }
    };

    return (

        <div className="min-h-screen bg-gray-50">
            <div className="relative h-44 bg-cover bg-center" style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg width='1600' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23a0826d'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3ELiving Room Interior%3C/text%3E%3C/svg%3E')"
            }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white">
                        <nav className="flex items-center space-x-2 text-medium">
                            <span>Trang chủ</span>
                            <span>&gt;</span>
                            <span className="text-yellow-400 font-bold">Thay đổi mật khẩu</span>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-20 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    <div className="lg:w-1/4">
                        <div className="p-1">
                            <h2 className="text-xl text-gray-800 mb-2">TRANG TÀI KHOẢN</h2>
                            <p className="text-gray-600 mb-5">
                               <span className="font-bold"> Xin chào,</span> <span className="text-[#ad7555] font-semibold">lan lam</span> !
                            </p>
                            
                            <nav className="space-y-2">
                                <Link
                                    to="/view-infor" 
                                    className="block w-full text-left py-2 px-3 rounded transition-colors text-gray-700 hover:bg-gray-100"
                                >
                                    Thông tin tài khoản
                                </Link>
                                <Link to="#"        
                                    className="block w-full text-left py-2 px-3 rounded transition-colors text-gray-700 hover:bg-gray-100"
                                >
                                    Đơn hàng của bạn
                                </Link>
                                <Link to="/change-password" className="block w-full text-left py-2 px-3 rounded  text-[#ad7555] font-medium">
                                    Đổi mật khẩu
                                </Link>
                                <Link to="#"                                    
                                    className="block w-full text-left py-2 px-3 rounded transition-colors text-gray-700 hover:bg-gray-100"
                                >
                                    Sổ địa chỉ (0)
                                </Link>
                            </nav>
                        </div>
                    </div>

                    <div className="lg:w-3/4">
                        <div className="p-1">
                            <div>
                                <h2 className="text-xl text-gray-800 mb-6">ĐỔI MẬT KHẨU</h2>
                                
                                <div className="mb-6">
                                    <p className="text-gray-600 mb-2">
                                        Để đảm bảo tính bảo mật vui lòng đặt lại mật khẩu với ít nhất 8 kí tự
                                    </p>
                                    {(errors.newPassword === "Mật khẩu mới dài từ 6 đến 50 ký tự" || errors.confirmPassword === "Xác nhận mật khẩu không khớp") && (
                                        <div className="text-red-600 text-sm space-y-1">
                                            {errors.newPassword === "Mật khẩu mới dài từ 6 đến 50 ký tự" && (
                                                <div>Mật khẩu mới dài từ 6 đến 50 ký tự</div>
                                            )}
                                            {errors.confirmPassword === "Xác nhận mật khẩu không khớp" && (
                                                <div>Xác nhận mật khẩu không khớp</div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Mật khẩu cũ *
                                        </label>
                                        <input
                                            type="password"
                                            value={currentPassword}
                                            onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                                            className={`w-auto px-4 py-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 ${
                                                errors.currentPassword 
                                                    ? 'border-red-300 focus:ring-red-500' 
                                                    : 'border-gray-200 focus:ring-orange-500'
                                            }`}
                                        />
                                        {errors.currentPassword && (
                                            <p className="text-red-600 text-sm mt-1">{errors.currentPassword}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Mật khẩu mới *
                                        </label>
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => handleInputChange('newPassword', e.target.value)}
                                            className={`w-auto px-4 py-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 ${
                                                errors.newPassword 
                                                    ? 'border-red-300 focus:ring-red-500' 
                                                    : 'border-gray-200 focus:ring-[#ad7555]'
                                            }`}
                                        />
                                        {errors.newPassword && errors.newPassword !== "Mật khẩu mới dài từ 6 đến 50 ký tự" && (
                                            <p className="text-red-600 text-sm mt-1">{errors.newPassword}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Xác nhận lại mật khẩu *
                                        </label>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                            className={`w-auto px-4 py-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 ${
                                                errors.confirmPassword 
                                                    ? 'border-red-300 focus:ring-red-500' 
                                                    : 'border-gray-200 focus:ring-[#ad7555]'
                                            }`}
                                        />
                                        {errors.confirmPassword && errors.confirmPassword !== "Xác nhận mật khẩu không khớp" && (
                                            <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
                                        )}
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="max-w-xl w-auto px-6 bg-[#ad7555] text-white font-medium py-2.5 rounded-md border border-[#ad7555] hover:bg-white hover:text-[#ad7555] transition duration-200 text-sm"
                                    >
                                        Đặt lại mật khẩu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;