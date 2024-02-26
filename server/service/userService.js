const bcrypt = require('bcrypt');
const userRepository = require('../repository/userRepository');


exports.createUser = async (email, name, password, phone) => {
    const user = await userRepository.findUserByEmail(email);
    if (user) {
        console.error(`[UserService]유저 추가를 실패.`);
        throw '이미 등록된 사용자 아이디입니다.';
    }
    const hash = await bcrypt.hash(password, 12);
    await userRepository.createUser(email, name, hash, phone);
};

exports.findAllUser = async () => {
    console.log(`[UserService] 유저정보 요청`)
    const user = await userRepository.findAllUser()
    if (!user) {
        console.error("[UserService] 유저 정보 없음");
        throw `유저 정보 없음`;
    }
    return user
};

exports.getUser = async (userId) => {
    const user = await userRepository.getUser(userId);
    if (!user) throw `[UserService] ${userId} 유저 정보 없음`;
    return user
};

exports.updateUser = async (userId, email, name, phone, address1, address2, zipCode) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
        console.error(`[UserService]유저정보 업데이트 실패. `);
        throw ('Not updated!');
    }
    await userRepository.updateUser(userId, email, name, phone, address1, address2, zipCode);
    console.log(`${email} 유저 정보 업데이트 완료`)
};

exports.deleteUser = async (userId) => {
    const result = await userRepository.deleteUser(userId);
    if (!result) {
        console.error(`[UserService]유저 정보 삭제실패.`);
        throw ('Not delete!');
    }
    console.log(`${userId} 유저 삭제 완료`)
};
