import React from "react";

const ProfileImage = ({ src, size = 100 }) => {
    return (
        <div style={{ width: size }} >
            <div className="round">
                {src && (
                    <img src={src} alt="" />
                )}
            </div>
            <style jsx>{`
            div.round {
                width: 100%;
                padding-top: 100%;
                border-radius: 50%;
                background: rgb(49, 49, 49);
                position: relative;
                overflow: hidden;
            }
            div.round>img {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                top: 0;
                object-fit: cover;
                object-position: center;
            }
            
            `}</style>
        </div>
    )
}

export default ProfileImage