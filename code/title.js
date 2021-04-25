/* 

-- Copyright (C) Fallen-Network, Inc - All Rights Reserved
-- Unauthorized copying of this file, via any medium is strictly prohibited
-- Proprietary and confidential
-- Written by Damien <https://github.com/Damien111>, November 2020

*/

if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop_title, 600);

}

var x = 0;

var titleText = ["C", "Cr", "Cry", "Crys", "Cryst", "Crysta" , "Crystal", "Crystal S", "Crystal Sq", "Crystal Squ", "Crystal Squa", "Crystal Squad"];

function loop_title() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}