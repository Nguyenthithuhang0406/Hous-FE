import React, { useState } from "react";
import { Link } from "react-router-dom";
const ViewEditInfor = () => {
   
    const CURRENT_USER_PASSWORD = "123456"; // Thay đổi mật khẩu 
    
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: 'lan lam',
        email: 'yirpng@gmail.com',
        phone: '+84325852874'
    });
    const [editForm, setEditForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleEditClick = () => {
        setIsEditing(true);
        setEditForm({
            name: userInfo.name,
            email: userInfo.email,
            phone: userInfo.phone,
            password: ''
        });
        setErrors({});
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditForm({
            name: '',
            email: '',
            phone: '',
            password: ''
        });
        setErrors({});
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[+]?[0-9]{10,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!editForm.name.trim()) {
            newErrors.name = "Vui lòng nhập họ tên";
        }

        if (!editForm.email.trim()) {
            newErrors.email = "Vui lòng nhập email";
        } else if (!validateEmail(editForm.email)) {
            newErrors.email = "Email không hợp lệ";
        }

        if (!editForm.phone.trim()) {
            newErrors.phone = "Vui lòng nhập số điện thoại";
        } else if (!validatePhone(editForm.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ";
        }

        if (!editForm.password.trim()) {
            newErrors.password = "Vui lòng nhập mật khẩu để xác nhận";
        } else if (editForm.password !== CURRENT_USER_PASSWORD) {
            newErrors.password = "Mật khẩu không đúng";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            setUserInfo({
                name: editForm.name,
                email: editForm.email,
                phone: editForm.phone
            });
            setIsEditing(false);
            alert("Cập nhật thông tin thành công!");
            setEditForm({
                name: '',
                email: '',
                phone: '',
                password: ''
            });
            setErrors({});
        }
    };

    const handleInputChange = (field, value) => {
        if (errors[field]) {
            setErrors({...errors, [field]: null});
        }
        setEditForm({...editForm, [field]: value});
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
                            <span className="text-yellow-400 font-bold">Trang khách hàng</span>
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
                               <span className="font-bold"> Xin chào,</span> <span className="text-[#ad7555] font-semibold">{userInfo.name}</span> !
                            </p>
                            
                            <nav className="space-y-2">
                                <Link to="/view-infor" className="block w-full text-left py-2 px-3 rounded text-[#ad7555] font-medium">
                                    Thông tin tài khoản
                                </Link>
                                <Link
                                    to="#"
                                    className="block w-full text-left py-2 px-3 rounded transition-colors text-gray-700 hover:bg-gray-100"
                                >
                                    Đơn hàng của bạn
                                </Link>
                                <Link
                                    to="/change-password"
                                    className="block w-full text-left py-2 px-3 rounded transition-colors text-gray-700 hover:bg-gray-100"
                                >
                                    Đổi mật khẩu
                                </Link>
                                <Link
                                    to="#"
                                    className="block w-full text-left py-2 px-3 rounded transition-colors text-gray-700 hover:bg-gray-100"
                                >
                                    Sổ địa chỉ (0)
                                </Link>
                            </nav>
                        </div>
                    </div>

                    <div className="lg:w-3/4">
                        <div className="p-1">
                            <h2 className="text-xl text-gray-800 mb-6">THÔNG TIN TÀI KHOẢN</h2>
                            
                            {!isEditing ? (
                                <div className="space-y-4">
                                    <div>
                                        <span className="font-medium text-gray-700">Họ tên: </span>
                                        <span className="text-gray-600">{userInfo.name}</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">Email: </span>
                                        <span className="text-gray-600">{userInfo.email}</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">Điện thoại: </span>
                                        <span className="text-gray-600">{userInfo.phone}</span>
                                    </div>
                                    
                                    <button
                                        onClick={handleEditClick}
                                        className="mt-6 px-6 bg-[#ad7555] text-white font-medium py-2.5 rounded-md border border-[#ad7555] hover:bg-white hover:text-[#ad7555] transition duration-200 text-sm"
                                    >
                                        Sửa thông tin
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <p className="text-gray-600 mb-6">
                                        Vui lòng nhập mật khẩu hiện tại để xác nhận thay đổi thông tin
                                    </p>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Họ tên *
                                            </label>
                                            <input
                                                type="text"
                                                value={editForm.name}
                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                                className={`w-auto px-4 py-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 ${
                                                    errors.name 
                                                        ? 'border-red-300 focus:ring-red-500' 
                                                        : 'border-gray-200 focus:ring-[#ad7555]'
                                                }`}
                                            />
                                            {errors.name && (
                                                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                value={editForm.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className={`w-auto px-4 py-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 ${
                                                    errors.email 
                                                        ? 'border-red-300 focus:ring-red-500' 
                                                        : 'border-gray-200 focus:ring-[#ad7555]'
                                                }`}
                                            />
                                            {errors.email && (
                                                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Điện thoại *
                                            </label>
                                            <input
                                                type="text"
                                                value={editForm.phone}
                                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                                className={`w-auto px-4 py-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 ${
                                                    errors.phone 
                                                        ? 'border-red-300 focus:ring-red-500' 
                                                        : 'border-gray-200 focus:ring-[#ad7555]'
                                                }`}
                                            />
                                            {errors.phone && (
                                                <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Mật khẩu hiện tại *
                                            </label>
                                            <input
                                                type="password"
                                                value={editForm.password}
                                                onChange={(e) => handleInputChange('password', e.target.value)}
                                                className={`w-auto px-4 py-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 ${
                                                    errors.password 
                                                        ? 'border-red-300 focus:ring-red-500' 
                                                        : 'border-gray-200 focus:ring-[#ad7555]'
                                                }`}
                                                placeholder="Nhập mật khẩu để xác nhận"
                                            />
                                            {errors.password && (
                                                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                                            )}
                                        </div>

                                        <div className="flex gap-4 mt-6">
                                            <button
                                                onClick={handleSubmit}
                                                className="px-6 bg-[#ad7555] text-white font-medium py-2.5 rounded-md border border-[#ad7555] hover:bg-white hover:text-[#ad7555] transition duration-200 text-sm"
                                            >
                                                Cập nhật thông tin
                                            </button>
                                            <button
                                                onClick={handleCancel}
                                                className="px-6 bg-gray-500 text-white font-medium py-2.5 rounded-md border border-gray-500 hover:bg-white hover:text-gray-500 transition duration-200 text-sm"
                                            >
                                                Hủy
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewEditInfor;