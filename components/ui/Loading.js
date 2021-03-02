import { motion } from "framer-motion"

export default function Loading() {
    return (
        <>
            <div id="wrapper">
                <div className="profile-main-loader">
                    <div className="loader">
                        <svg className="circular-loader" viewBox="25 25 50 50" >
                            <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </div>
            <style jsx>{`
            #wrapper{
                position:relative;
                pointer-events: none;
                height:100%;
            }
            .profile-main-loader{
                left: 50% !important;
                margin-left:-100px;
                position: fixed !important;
                top: 50% !important;
                margin-top: -100px;
                width: 45px;
                z-index: 9000 !important;
            }
            .profile-main-loader .loader {
                position: relative;
                margin: 0px auto;
                width: 200px;
                height:200px;
            }
            .profile-main-loader .loader:before {
                content: '';
                display: block;
                padding-top: 100%;
            }
            .circular-loader {
                -webkit-animation: rotate 2s linear infinite;
                        animation: rotate 2s linear infinite;
                height: 100%;
                -webkit-transform-origin: center center;
                    -ms-transform-origin: center center;
                        transform-origin: center center;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                margin: auto;
            }

            .loader-path {
                stroke-dasharray: 150,200;
                stroke-dashoffset: -10;
                -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
                        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
                stroke-linecap: round;
            }

            @-webkit-keyframes rotate {
                100% {
                    -webkit-transform: rotate(360deg);
                            transform: rotate(360deg);
                }
            }

            @keyframes rotate {
                100% {
                -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
                }
            }
            @-webkit-keyframes dash {
            0% {
            stroke-dasharray: 1,200;
            stroke-dashoffset: 0;
            }
            50% {
            stroke-dasharray: 89,200;
            stroke-dashoffset: -35;
            }
            100% {
            stroke-dasharray: 89,200;
            stroke-dashoffset: -124;
            }
            }
            @keyframes dash {
            0% {
            stroke-dasharray: 1,200;
            stroke-dashoffset: 0;
            }
            50% {
            stroke-dasharray: 89,200;
            stroke-dashoffset: -35;
            }
            100% {
            stroke-dasharray: 89,200;
            stroke-dashoffset: -124;
            }
            }
            @-webkit-keyframes color {
            0% {
            stroke: #70c542;
            }
            40% {
            stroke: #70c542;
            }
            66% {
            stroke: #70c542;
            }
            80%, 90% {
            stroke: #70c542;
            }
            }
            @keyframes color {
            0% {
            stroke: #70c542;
            }
            40% {
            stroke: #70c542;
            }
            66% {
            stroke: #70c542;
            }
            80%, 90% {
            stroke: #70c542;
            }
            }

            `}</style>
        </>
    )
}