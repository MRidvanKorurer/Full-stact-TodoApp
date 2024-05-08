const randomAvatar = () => {
    const randomNum = Math.floor(Math.random() * 71);
    return `https://i.pravatar.cc/300?img=${randomNum}`
}


export default randomAvatar;