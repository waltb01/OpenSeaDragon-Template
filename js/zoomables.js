var viewer = OpenSeadragon({

    //THIS IS THE NAME OF THE VIEWPORT AND ASSOCIATED PARAMETERS. YOU CAN DUPLICATE THE ENTIRE SECTION FOR MULTIPLE VIEWPORTS -NOT RECOMMENDED.
    id: "openseadragon_zoomables",

    //THE PREFIXURL RETRIEVES THE TOOLBAR IMAGES
    prefixUrl: "./openseadragon/images/",

    
    //IF YOU DISPLAY MULTIPLE VIEWPORTS ON THE SAME WEBPAGE, THEN EACH MUST HAVE A UNIQUE TOOLBAR NAME.
    toolbar: "toolbardiv_toolbar",
    visibilityratio: "1",
    defaultZoomLevel: "1",
    maxZoomPixelRatio: "5",
    constrainDuringPan: "true",
    degrees: "0",
    tileSources: [

        //LIST YOUR DZI FILES HERE. CHECK THE FOLDER LOCATION.

       // "/panoramics/image.dzi",
       // "/panoramics/filename2.dzi",

        //NOTE THAT THE FINAL .DZI LISTING MUST HAVE NO COMMA ENDING AS SHOWN BELOW! I'VE INCLUDED AN EXAMPLE USING ONE OF MY ART PIECES.

        
        "/panoramics/image.dzi"
              
                
    ],

    //THIS CODE INSERTS THE SCROLL ARROWS ("true") WHEN YOU HAVE MULTIPLE FILE LISTING ABOVE

    sequenceMode: false,

});
