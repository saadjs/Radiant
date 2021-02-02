import React from "react";
import Style from "style-it";

const InlineCSS = ({ playing }) => {
	return (
		<Style>
			{`
                #main-main {
                    width: 100%;
                    height: 100%;
                    display: block;
                    position: relative;
                    height: 100vh;
                }

                #main-main::after {
                    content: ' ';
                    background: url('${playing.photo}');
                    transition: all 2s ease;
                    background-size: 100% 100%;
                    opacity: 0.2;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    position: absolute;
                    z-index: -1; 
                	margin-bottom: 0;

                }
                `}
		</Style>
	);
};

export default InlineCSS;
