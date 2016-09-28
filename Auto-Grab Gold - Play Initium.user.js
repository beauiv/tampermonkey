// ==UserScript==
// @name         Auto-Grab Gold - Play Initium
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Grabs gold automatically when found.
// @author       @beauiv_ (twitter)
// @match        *http://www.playinitium.com/*
// @match        *https://www.playinitium.com/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    // Check for gold
     $(window).load(function() {
        //ajax is fun, not sure of how to scan for gold without doing it every tenth of a second.
        var x = setInterval(function(){            
        try{
            var goldLink = $('a[onclick*="collectDogecoin"]');
            if ( $(goldLink).attr("onclick") !== undefined)
            {
                //get gold
                if( !$(goldLink).text().includes("Gold retrieved."))
                {
                $(goldLink).click();
                $(goldLink).text($(goldLink).text() + " -- Gold retrieved.");
                }
            }
            //else no gold is visible, don't try to get it
            else
            {
                 //do nothing
            }
        }
        

        catch(e)
        {
            clearInterval(x);
            alert("Error collecting gold! Send to @beauiv_ : " + e.message);
        }
            },100);
    }
    
    );
})();
