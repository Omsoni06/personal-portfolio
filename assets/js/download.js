'use strict';
//download.js

 
function enableResumeDownloadButton() {
    downloadPageRecaptchaValidated = true;
    $('#resume--download-icon').removeClass('fas fa-window-close');
    $('#resume--download-icon').addClass('fas fa-download');

    $('#resume--download-link').prop('href', "assets/img/final.pdf");
    $('#resume--download-link').prop('download', "HarryDulaneyResume");

}

/**
 * Disable the resume download button
 */
// function disableResumeDownloadButton() {
//     downloadPageRecaptchaValidated = false;
//     $('#resume--download-icon').removeClass('fas fa-download');
//     $('#resume--download-icon').addClass('fas fa-window-close');

//     $('#resume--download-link').prop('disabled', true);
//     $('#resume--download-link').prop('href', "#");
//     $('#resume--download-link').prop('download', undefined);
// }
