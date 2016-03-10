/**
 * Raphael.js-ized Vector objects
 */


var FUSN = FUSN || {};

FUSN.RaphaelObjects = {

    // Raw SVG Data
    data: {
        leaves: [0,0,0,0,{"stroke":"none","path":"M99.1,138.6 183,17.4 164.9,1.2 89.9,134.3 z","type":"path","fill":"#004712"},{"stroke":"none","path":"M88.3,131c0,0-24.9-17.8-52.4-8s-33.3,41-33.3,41s20.9,10.6,48.4,1.8C78.6,157.1,88.3,131,88.3,131z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M25.3,150.5 25.1,149.9 88.2,130.8 89.1,131.2 z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M91.7,142.7c0,0-20.8,22.9-14.5,51.8c6.3,29,36.5,38.8,36.5,38.8s13.2-19.6,7.9-48.6 C116.4,155.7,91.7,142.7,91.7,142.7z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M102.7,208.6 91.4,142.7 92.1,141.9 103.2,208.5 z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M94.8,105.1c0,0-9.8-19.6-30.6-22.9c-20.8-3.3-35,14.3-35,14.3s9.6,13.9,30.2,17.8 C79.9,118.2,94.8,105.1,94.8,105.1z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M94.7,105.3 48.3,95.7 48.4,95.3 95.4,104.8 z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M125.9,105.7c0,0-9.6,19.8,0.6,38.4c10.2,18.4,32.8,19,32.8,19s4.9-16.1-4.5-34.7 C145.3,109.6,125.9,105.7,125.9,105.7z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M146.8,148.5 125.4,105.3 126.1,105.6 147.1,148.3 z","type":"path","fill":"#F9F7E7"}],
        onions: [0,0,0,0,{"stroke":"none","path":"M41.9,171.8c0.7-1.9,0.9-4,1-6c0.9,2.7,1.9,5.3,3.2,7.8c-0.3-2.7-0.9-5.4-1.6-8c0.4,0,0.3-0.1,0.6,0.2 c0.3,0.2,0.5,0.6,0.8,0.9c0.7,0.7,1.3,1.5,2,2.1c1.3,1.3,2.5,2.5,3.9,3.7c-0.7-1.3-1.5-2.5-2.4-3.6c-0.8-1.1-1.5-2.3-2.4-3.4 c9-0.7,18.3-3.5,25.2-9.6c5.7-5.1,8.9-12.1,9.8-19.6c1-8.2-0.2-16.9-4.2-24.2c-3.6-6.6-9.3-11.5-15.5-15.5c-1.4-0.9-2.8-1.7-4.1-2.6 c-1-0.7-2.4-1.4-2.9-2.6c-1.2-3.1-0.7-7,0.1-10c0,0-0.1,0-0.1,0c0.4-0.7-0.2-1.4-0.7-1.8c-2-1.5-5.1-1.9-7.5-1.5 c-0.8,0.1-2,0.4-2.3,1.3c-0.1,0.4,0,0.7,0.1,1c0,0.3,0,0.6-0.1,0.8c-0.2,2-0.7,4-1.5,5.9c-0.5,1.3-1,2.6-1.8,3.8 c-0.5,0.8-1.3,1.3-2.1,1.8c-3.2,1.9-7.1,2.8-10.5,4.1c-2.9,1.1-5.7,2.5-8.3,4.2c-6.7,4.4-11.3,11-13.5,18.6 c-1.6,5.5-2.7,11.7-1.3,17c1.4,5.3,3.5,10.3,7.1,14.4c3.6,4.1,8.1,7.3,12.9,9.9c3.8,2,7.9,3.6,12.1,4.5c-1.5,1.6-2.8,3.2-4.1,5 c2-1.3,3.8-2.8,5.6-4.4c-1,2.1-1.9,4.3-2.6,6.4c1-1.2,1.9-2.5,2.8-3.8c0.4-0.6,0.8-1.2,1.2-1.9c0.1-0.2,0.4-1,0.7-0.9 c-0.2,1.3-0.4,2.7-0.4,4c0,1.3-0.1,2.9,0.4,4.1C41.5,173,41.8,172.4,41.9,171.8C42.3,170.7,41.8,172.4,41.9,171.8z M13,122.1 c2.1-8.3,7.5-15.5,13.3-21.6c-2.4,3.4-5.1,6.7-7.3,10.3c-2.2,3.4-4,7-5.2,10.9c-1.2,4.2-1.5,8.6-1,13c1,7.6,4.4,14.3,7.3,21.2 c-1.1-2-2.2-4.1-3.2-6.2C12.9,141,10.5,131.5,13,122.1 M22.8,125c0.6-2.2,1.4-4.3,2.4-6.3c2.9-6.1,7.1-11.5,11.7-16.5 c-2.6,3.6-5.4,7.1-7.8,10.9c-2.3,3.6-4.3,7.4-5.5,11.6c-1.3,4.4-1.5,9.1-0.9,13.7c1.1,7.9,4.7,14.9,7.7,22.2 c-1.2-2.2-2.3-4.3-3.4-6.5C22.7,144.9,20.2,134.9,22.8,125 M74.8,128.1c0,2.9-0.4,5.7-1.2,8.5c-2.5,8.7-8.3,15.8-14.4,22.2 c2.2-2.9,4.5-5.6,6.7-8.5c4.5-6.1,7.9-13,8.4-20.6c0.5-9.2-3.4-17.5-6.6-25.9C71.6,111.2,74.9,119.6,74.8,128.1 M64.6,128.3 c0,3-0.5,6-1.3,8.9c-2.6,9.2-8.8,16.7-15.3,23.5c2.3-3,4.8-5.9,7.1-9c4.7-6.4,8.3-13.7,8.7-21.7c0.2-4.9-0.6-9.8-2.1-14.5 c-1.4-4.4-3.2-8.6-4.7-12.9C61.1,110.5,64.6,119.3,64.6,128.3 M54.7,127.4c0,3.1-0.5,6.2-1.4,9.2c-1.4,4.8-3.9,9.3-6.9,13.3 c-1.4,1.9-2.9,3.8-4.5,5.5c-0.7,0.8-1.5,1.7-2.3,2.5c-0.2,0.2-0.5,0.4-0.6,0.6c-0.2,0.3-0.2,0-0.1,0.4c0,0.2,0.2,0.4,0.2,0.5 c0.3,0.7,0.6,1.5,0.9,2.2c-0.5-0.9-1-1.8-1.5-2.8c-0.1,0.1-0.2,0.2-0.3,0.3c0.3-0.3,0.3-0.4,0.1-0.7c-0.1-0.3-0.3-0.5-0.4-0.8 c-0.3-0.5-0.5-1-0.7-1.5c-0.5-1-0.9-2-1.4-3c-0.9-2.2-1.8-4.4-2.5-6.6c-2.6-8.5-2.4-17.5,1.2-25.7c2.8-6.3,7.1-12,11.9-17 c-2.3,3.3-4.9,6.5-7.1,9.9c-2.1,3.2-4.1,6.7-5.3,10.3c-1.4,4-2,8.3-1.8,12.6c0.4,7.7,3.5,14.8,6.5,21.7c2.3-2.9,4.7-5.8,6.9-8.8 c4.6-6.3,8-13.5,8.3-21.4c0.3-9.4-3.7-17.9-6.9-26.5C51.3,109.7,54.8,118.5,54.7,127.4 M41.9,146.9c0.2-5.3,1.6-10.4,2.7-15.5 c1.1-4.9,2-9.9,1.4-15c0.8,1.7,0.8,3.8,0.7,5.7c-0.3,4.7-1.6,9.4-2.6,14c-0.5,2.4-1,4.9-1.3,7.3c-0.1,0.6-0.1,1.2-0.2,1.7 c0,0.5,0,1.1-0.1,1.7c-0.1,0.3-0.6,0.9-1,0.8C41,147.3,41.7,147,41.9,146.9","type":"path","fill":"#162E18"},{"stroke":"none","path":"M57.8,69.8c-1.2,1.8-2.3,3.9-3.2,6.2c0,0,0,0,0,0c0.2-1.4,0-3.8,0-5.3c0.2-18.2,5.8-31.4,20.6-29.2 c-10.7-4.5-17.3,2.8-20.7,14.3c0.8-6,1.3-10.4,4.1-13.6c1.1-1.3,2.4-1.4,3.7-2.4c-7.2-0.7-8.4,6.4-9.7,14.8c-1,6.1-1,12-1.7,17.7 c0.7-14.7,1.8-32.5,9-37.3c-1,0-1.9,0.3-2.8,1c-7.1,5.7-7.3,24-8.2,38.7c-0.2-13.4,1.2-28.7,0.5-41.3c-1.5,7.9-1.7,16.5-2.3,25.2 c-0.2,3.8-0.7,7.9-0.5,11.9c0.1,1.4,0.1,2.8,0.2,4.3c-1.1-13.4-5.1-24.4-12-30.7c-3.5-3.4-9.8-7.9-14.2-4.4 c7.5,0.1,13,4.6,16.8,10.3c3.4,5,7.6,13.8,7.3,22.3c0,0.4-0.1,0.8-0.2,1.2c-3-6.9-7.7-12.1-13.2-13.2c-1.9-0.4-3.4-0.2-4.7,0.8 c8-1.2,12,5.5,14.2,12.4c1.4,4.2,2,8.8,2.3,14c1.2-0.3,3.4-0.5,4.8-0.6c1-0.1,2.1-0.2,3.1-0.2c0.1,0,2.3,0.1,3.1,0.2 c2.5-16.8,10.1-25.8,23.7-26.5C69.5,57.1,62.1,63.2,57.8,69.8z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M147,216.7c0.2,0.9,0.6,1.8,1,2.6c0.6-1.7,0.4-4,0.3-5.8c-0.1-1.9-0.4-3.8-0.9-5.7c0.4-0.1,0.9,0.9,1.1,1.2 c0.6,0.9,1.2,1.7,1.8,2.6c1.3,1.8,2.7,3.6,4.2,5.2c-1.2-3.1-2.6-6.1-4.2-9c2.7,2.1,5.4,4.1,8.3,5.8c-1.9-2.4-4-4.6-6.2-6.8 c5.9-1.5,11.6-4.1,16.9-7.1c6.7-3.9,12.8-8.8,17.6-14.8c4.8-6.1,7.4-13.4,9.1-21c1.7-7.6-0.3-16.3-2.9-24 c-3.7-10.7-10.6-19.8-20.4-25.5c-3.8-2.2-7.9-3.9-12-5.4c-5-1.7-10.5-2.7-15.2-5.2c-1.1-0.6-2.3-1.3-3-2.4c-1.1-1.6-2-3.4-2.8-5.2 c-1.1-2.6-2-5.4-2.5-8.2c-0.1-0.4-0.2-0.8-0.2-1.2c0-0.5,0.2-0.9,0-1.4c-0.5-1.2-2.3-1.5-3.4-1.7c-3.4-0.4-7.8,0.4-10.5,2.6 c-0.7,0.6-1.5,1.6-0.9,2.6c-0.1,0-0.1,0-0.2,0c1.3,4.3,2.3,9.8,0.8,14.2c-0.6,1.7-2.5,2.9-3.9,3.9c-1.9,1.3-3.8,2.6-5.7,3.9 c-8.6,6.1-16.3,13.5-21,23.1c-5.2,10.7-6.3,23-4.4,34.6c1.8,10.6,6.8,20.4,15.2,27.2c10.1,8.2,23.6,11.5,36.4,11.9 c-1.2,1.5-2.2,3.3-3.2,5c-1.1,1.7-2.2,3.5-3.1,5.3c1.9-1.7,3.6-3.6,5.3-5.5c0.9-1,1.8-2.1,2.6-3.2c0.3-0.4,0.7-1,1.1-1.4 c0.4-0.3,0.2-0.2,0.8-0.3c-0.8,3.7-1.5,7.6-1.8,11.4c1.7-3.6,2.9-7.5,4-11.3C145.5,211.1,146,214,147,216.7 C147.2,217.5,146.4,215.2,147,216.7z M184.8,144.3c4.1,13.1,1.4,26.8-3.7,39.3c-1.3,3.1-2.7,6.1-4.1,9c3.6-10,8.1-19.8,8.9-30.6 c0.5-6.2-0.2-12.4-2.2-18.3c-1.8-5.4-4.7-10.4-8-15.1c-3.5-4.9-7.4-9.4-11.1-14.1C173.1,122.8,181.2,132.7,184.8,144.3 M171,149.1 c4.3,13.9,1.5,28.2-3.9,41.3c-1.3,3.2-2.8,6.4-4.3,9.5c3.8-10.5,8.5-20.7,9.4-32c0.6-6.5-0.1-13.1-2.2-19.3 c-2-5.8-5.1-11.1-8.6-16.1c-3.7-5.2-7.9-9.9-11.7-14.9c6.8,6.7,13.1,14.1,17.7,22.6C168.8,143.1,170.1,146,171,149.1 M97.5,156.9 c-0.7-12.1,3.5-24.2,8.6-35c-3.9,12.1-8.9,24.2-7.6,37.2c1.1,10.9,6.4,20.4,13.2,28.7c3.2,4,6.7,7.7,10,11.6 c-9.1-8.7-17.9-18.3-21.9-30.5C98.5,165,97.7,161,97.5,156.9 M112,156.5c-0.6-12.8,3.8-25.5,9.1-36.9c-1.9,6.2-4.2,12.3-5.9,18.5 c-1.8,6.8-2.7,13.7-2,20.7c1.1,11.4,6.7,21.5,13.8,30.3c3.4,4.2,7.1,8.1,10.6,12.3c-9.7-9.2-18.9-19.4-23.2-32.3 C113,165,112.2,160.8,112,156.5 M125.9,154.5c-0.7-12.6,3.6-25.3,9-36.5c-3.9,12.4-9.1,24.7-8,38c0.9,11.2,6.2,21.2,13.1,29.9 c3.3,4.1,6.9,8,10.4,12c3.9-10.1,7.7-20.3,7.8-31.3c0-6.1-1.1-12.1-3.3-17.8c-2-5.1-5-9.9-8.2-14.3c-3.4-4.7-7.2-9-10.7-13.6 c7.1,6.8,13.5,14.5,18,23.3c5.7,11.4,6.5,24.1,3.4,36.3c-0.8,3.2-1.9,6.4-3.1,9.6c-0.6,1.5-1.2,2.9-1.8,4.3c-0.3,0.7-0.6,1.4-1,2.1 c-0.2,0.4-0.3,0.7-0.5,1.1c-0.3,0.5-0.2,0.6,0.2,1c-0.1-0.1-0.3-0.3-0.4-0.4c-0.6,1.3-1.3,2.7-1.9,4c0.4-1.1,0.8-2.2,1.2-3.2 c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.6,0.1-0.2-0.1-0.6c-0.2-0.3-0.6-0.6-0.9-0.9c-1.1-1.1-2.3-2.2-3.4-3.4c-2.4-2.4-4.6-4.9-6.8-7.6 c-4.5-5.6-8.3-11.7-10.6-18.5C127,163.3,126.1,158.9,125.9,154.5 M145.4,181.4c0.2,0.1,1.2,0.6,0.6,0.8c-0.6,0.2-1.3-0.6-1.4-1 c-0.2-0.7-0.2-1.6-0.3-2.4c-0.1-0.8-0.2-1.6-0.4-2.4c-0.6-3.5-1.5-6.9-2.4-10.3c-1.7-6.5-3.8-13-4.6-19.7c-0.3-2.6-0.5-5.6,0.6-8.1 c-0.6,7.2,1.1,14.3,2.9,21.2C142.5,166.7,144.7,173.9,145.4,181.4","type":"path","fill":"#162E18"},{"stroke":"none","path":"M117,66.1c1.7,2.8,3.4,6,4.8,9.5c0,0,0-0.1,0-0.1c-0.3-2.2,0-5.9,0-8.3c-0.3-28.2-8.7-48.8-30.7-45.3 c16-7,25.8,4.3,30.8,22.2c-1.2-9.4-1.9-16.2-6.1-21.1c-1.6-2-3.6-2.2-5.5-3.8c10.7-1.2,12.5,9.9,14.4,22.9 c1.4,9.4,1.4,18.6,2.5,27.5C126,47,124.4,19.4,113.7,12c1.4,0,2.8,0.5,4.1,1.5c10.6,8.9,10.9,37.2,12.2,60.1 c0.3-20.7-1.7-44.4-0.8-64.1c2.2,12.2,2.5,25.5,3.5,39c0.3,5.9,1.1,12.2,0.8,18.5c-0.1,2.1-0.2,4.4-0.2,6.7 c1.6-20.8,7.6-37.8,17.9-47.6c5.2-5.3,14.5-12.2,21.2-6.7c-11.2,0.2-19.3,7.1-25,16c-5,7.7-11.3,21.4-10.9,34.6 c0,0.6,0.1,1.2,0.2,1.9c4.5-10.7,11.5-18.8,19.7-20.5c2.8-0.6,5.1-0.3,6.9,1.3c-11.8-1.8-17.9,8.5-21.2,19.2 c-2.1,6.6-3,13.7-3.5,21.8c-1.9-0.5-5-0.8-7.1-0.9c-1.5-0.1-3.1-0.3-4.6-0.3c-0.2,0-3.5,0.2-4.6,0.3c-3.8-26-15-40-35.2-41.2 C99.5,46.4,110.5,55.9,117,66.1z","type":"path","fill":"#6CB33F"}],
        orangeTree: [0,0,0,0,{"stroke":"none","path":"M192.9,39.7c0,0-3.4-10.4,2.8-18.9c6.2-8.5,17.5-7.3,17.5-7.3s1.4,8.4-4.3,16.9 C202.9,39,192.9,39.7,192.9,39.7z","type":"path","fill":"#4B862D"},{"stroke":"none","path":"M193.7,39.7c1.6-3.7,3.6-7.1,5.7-10.5c2.2-3.3,4.5-6.5,7.3-9.5c-1.6,3.7-3.6,7.1-5.7,10.5 C198.8,33.7,196.5,36.9,193.7,39.7z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M68.2,83.6c0,0-23.7,7.4-42.6-7S9.7,36.9,9.7,36.9S28.5,34,47.8,47.6C67.1,61.3,68.2,83.6,68.2,83.6z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M66.6,82.1c-7.8-4.5-15.3-9.5-22.6-14.4c-7.3-5.1-14.6-10.4-21.5-16c7.8,4.5,15.3,9.3,22.6,14.4 C52.3,71,59.6,76.3,66.6,82.1z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M176.5,41.4c0,0-5,9.5-15,10.9c-10.1,1.4-16.7-7.1-16.7-7.1s4.8-6.5,14.7-8.4 C169.5,35.1,176.5,41.4,176.5,41.4z","type":"path","fill":"#4B862D"},{"stroke":"none","path":"M176.2,40.8c-3.6,1.4-7.3,2.3-11.2,3.1c-3.7,0.6-7.6,1.2-11.5,1.2c3.6-1.4,7.3-2.3,11.2-3.1 C168.5,41.4,172.3,40.8,176.2,40.8z","type":"path","fill":"#F9F7E7"},{"ry":31.5,"cy":70.4,"fill":"#F7941E","cx":184,"rx":30.5,"stroke-width":0.9793,"type":"ellipse","stroke":"#F9F7E7"},{"stroke":"none","path":"M188.8,51.7c0.4-0.5,0.9-1.1,1.2-1.9c-0.9-0.3-1.8-0.2-2.6,0c-0.1-0.7-0.3-1.4-0.7-2.2 c-0.7,0.5-1.1,1.2-1.4,1.9c-0.8-0.5-1.5-0.8-2.5-0.9c0,0.6,0.1,1.2,0.3,1.7c0,0,0,0,0,0c-0.8,0-1.6,0.3-2.3,0.8 c0.6,0.8,1.4,1.2,2,1.5c-0.4,0.4-0.7,0.9-0.9,1.6c0.9,0.1,1.6,0.1,2.3,0.1c0,0.1,0,0.3,0,0.4c0.2,0.9,0.3,1.7,0.8,2.6 c0.8-0.8,1.2-1.4,1.6-2.2c0.1-0.2,0.2-0.4,0.3-0.5c0.6,0.3,1.3,0.6,2.1,0.7c0-0.8-0.3-1.5-0.5-2.2c0.4-0.1,0.8-0.3,1.1-0.6 C189.3,52.1,189.1,51.9,188.8,51.7z","type":"path","fill":"#004712"},{"type":"path","path":"M135.4,61.9c11.5,12.2,10.5,31.9-2.2,43.9 c-12.7,11.9-32.4,11.6-43.9-0.8c-11.5-12.2-10.5-31.9,2.2-43.9S124,49.5,135.4,61.9z","stroke-width":0.9793,"fill":"#F7941E","stroke":"#F9F7E7"},{"stroke":"none","path":"M100.4,71.3c1.1-0.2,2.1-0.5,3.1-1c-1-0.3-2-0.4-2.9-0.4c0.3-0.5,0.7-1.1,0.9-1.6c-0.7,0.2-1.2,0.5-1.8,0.8 c0-1-0.1-1.9-0.2-2.9c-0.5,1-0.9,2-1.1,3.1c-0.7-0.6-1.5-1.2-2.5-1.7c0.4,0.9,0.9,1.8,1.4,2.5c-1,0.2-2.1,0.5-3,1 c0.8,0.3,1.7,0.4,2.5,0.4c-0.7,0.8-1.3,1.7-1.8,2.7c1.1-0.3,2-0.9,2.9-1.7c0,0.9,0.1,1.7,0.2,2.6c0.5-0.9,0.8-1.9,1.1-2.8 c0.9,0.8,1.9,1.6,3.1,2.2C101.9,73.4,101.2,72.3,100.4,71.3z","type":"path","fill":"#004712"},{"type":"path","path":"M110,152.1c3.6,19.2-9.6,37.8-29.5,41.5 c-19.8,3.7-38.8-8.8-42.5-28.1c-3.6-19.2,9.6-37.8,29.5-41.5C87.4,120.3,106.4,132.9,110,152.1z","stroke-width":0.9793,"fill":"#F7941E","stroke":"#F9F7E7"},{"stroke":"none","path":"M71.6,138.2C71.5,138.2,71.5,138.2,71.6,138.2c0.4-0.3,0.8-0.7,1.2-1.1c-0.5-0.2-1-0.4-1.5-0.5 c0.3-0.7,0.6-1.6,0.7-2.6c-0.9,0.3-1.9,0.6-2.6,1.2c0,0-0.1,0.1-0.1,0.1c-0.4-0.7-0.9-1.6-1.6-2.3c-0.4,0.8-0.6,1.7-0.6,2.7 c-0.1,0-0.1,0-0.2,0c-0.9-0.2-1.9-0.3-2.9-0.2c0.3,0.7,0.7,1.2,1.2,1.7c-0.1,0-0.2,0.1-0.3,0.1c-0.8,0.5-1.6,0.9-2.3,1.7 c0.9,0.5,1.9,0.6,2.8,0.6c0.1,0,0.2,0,0.2,0c-0.2,0.6-0.4,1.3-0.5,2.2c1.1-0.3,1.9-0.8,2.6-1.2c0.1,0.2,0.2,0.5,0.3,0.8 c0.5,0.8,0.9,1.7,1.7,2.5c0.5-1.1,0.6-2,0.6-2.9c0-0.2,0.1-0.4,0.1-0.6c0,0,0.1,0,0.1,0c0.9,0.2,1.9,0.3,2.9,0.2 C72.8,139.4,72.2,138.8,71.6,138.2z","type":"path","fill":"#004712"},{"stroke":"none","path":"M127.2,111.8c0,0,3.1,23.3-13.3,38.6s-39.5,8.4-39.5,8.4s0.3-18,16.1-33.8S127.2,111.8,127.2,111.8z","type":"path","fill":"#4B862D"},{"stroke":"none","path":"M126.4,110.6c-5.4,6.5-11.2,12.7-17.1,18.8c-5.9,6-11.9,11.9-18.4,17.5c5.4-6.5,11.2-12.7,17.1-18.8 C114,121.9,120.1,116,126.4,110.6z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M162.3,109.3c0,0,22.6,31.2,11,66c-11.9,35-50.5,43.1-50.5,43.1s-13.6-26-3.3-61.2 C129.9,122.2,162.3,109.3,162.3,109.3z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M160.1,108.1c-0.8,3.4-1.6,6.8-2.3,10.1l-2.6,10.1c-1.7,6.7-3.6,13.3-5.4,20s-3.9,13.3-5.9,20l-3.1,9.9 c-1.1,3.3-2.2,6.7-3.3,9.9c0.8-3.4,1.6-6.8,2.3-10.1l2.6-10.1c1.7-6.7,3.6-13.3,5.4-20s3.9-13.3,5.9-20l3.1-9.9 C157.9,114.8,158.8,111.5,160.1,108.1z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M314.3,90.6c0,0,22.6-5.9,40,8.5c17.2,14.4,13.2,38.1,13.2,38.1s-17.8,1.9-35.5-11.8 C314.5,111.7,314.3,90.6,314.3,90.6z","type":"path","fill":"#4B862D"},{"stroke":"none","path":"M314,92c7.1,4.5,14,9.5,20.8,14.6c6.7,5.1,13.3,10.4,19.7,16.1c-7.1-4.5-14-9.5-20.8-14.6 C326.9,103,320.4,97.7,314,92z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M310.8,88.6c0,0,12.9,25.9-0.2,50.4c-13,24.5-42.8,25.6-42.8,25.6s-6.8-21.1,5.3-45.9 C285.2,94,310.8,88.6,310.8,88.6z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M308.9,88.6c-3.7,9.8-8.1,19.2-12.6,28.7s-9.1,18.8-14.3,27.9c3.7-9.8,8.1-19.2,12.6-28.7 S303.8,97.7,308.9,88.6z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M107.4,111.8c0,0-19.1,22.3-47,20c-28.1-2.5-40.9-29.6-40.9-29.6s16.9-14.9,44.8-13.3 C92.2,90.3,107.4,111.8,107.4,111.8z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M106.8,110.1c-10.7,0.5-21.2,0.2-31.8-0.2c-10.5-0.5-21.1-0.9-31.6-2.2c10.5-0.3,21.2-0.2,31.8,0.3 C85.5,108.4,96.2,109,106.8,110.1z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M191.4,42.1c0,0-1.2-17.8-15.8-26.8c-14.6-9-30.7-0.3-30.7-0.3s2.9,13.3,17.1,22.8S191.4,42.1,191.4,42.1z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M190.8,41.4c-5.7-2.9-11.2-6.5-16.4-10.1c-5.3-3.7-10.5-7.4-15.3-11.6c5.7,2.9,11.2,6.5,16.4,10.1 C180.7,33.4,186,37.3,190.8,41.4z","type":"path","fill":"#F9F7E7"},{"type":"path","path":"M308.8,182.4c-14,29-49.5,40.8-79.2,26.5 c-29.9-14.4-42.8-49.5-29-78.4c14-29,49.5-40.8,79.2-26.5C309.7,118.3,322.7,153.4,308.8,182.4z","stroke-width":0.9793,"fill":"#F7941E","stroke":"#F9F7E7"},{"stroke":"none","path":"M276,121.6c-1.6-0.6-3.1-0.8-4.7-0.8c-0.2,0-0.3,0-0.4,0c0.3-1.5,0.4-3,0.3-4.8c-1.5,0.9-2.6,2-3.5,3.2 c-0.1-0.1-0.2-0.3-0.3-0.4c-0.9-1.2-2-2.2-3.6-3.1c-0.3,1.5-0.1,2.8,0.2,4c-0.2-0.1-0.4-0.1-0.6-0.2c-1.6-0.3-2.9-0.5-4.7-0.2 c0.9,1.4,2,2.5,3.1,3.4c0.1,0.1,0.2,0.2,0.4,0.3c-1.1,0.6-2.1,1.3-3.1,2.4c1.7,0.6,3.1,0.8,4.7,0.8c0.1,0,0.2,0,0.3,0 c-0.1,0.4-0.2,0.8-0.3,1.2c-0.3,1.6-0.5,3.1-0.3,5c1.6-0.9,2.6-2,3.6-3.3c0.4-0.4,0.7-0.8,1-1.2c0,0,0.1,0.1,0.1,0.1 c0.9,1.2,2,2.2,3.6,3.1c0.2-1.7,0-3.3-0.3-4.7c0,0,0,0,0,0c0.9,0.1,1.8,0.1,2.8-0.1c-0.5-0.8-1.1-1.5-1.7-2.1 C273.6,123.5,274.8,122.8,276,121.6z","type":"path","fill":"#004712"},{"stroke":"none","path":"M170,108.4c0,0,16,2.9,22.6,17.1c6.5,14.1-2.9,27.9-2.9,27.9s-11.8-4-18.8-17.8 C163.8,121.7,170,108.4,170,108.4z","type":"path","fill":"#4B862D"},{"stroke":"none","path":"M168.9,107.3c3.4,4.8,6.2,9.9,9,15.2c2.6,5.3,5.3,10.5,7.3,16c-3.4-4.8-6.2-9.9-9-15.2 C173.6,118.2,170.9,112.9,168.9,107.3z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M229.4,100c0,0,23.1,4.3,32.7,24.8c9.5,20.5-4.3,40.3-4.3,40.3s-17.1-5.9-27.1-25.9 C220.4,119.3,229.4,100,229.4,100z","type":"path","fill":"#4B862D"},{"stroke":"none","path":"M227.8,98.5c4.7,7.1,8.7,14.6,12.7,22.2c3.9,7.6,7.8,15.2,11,22.9c-4.7-7.1-8.7-14.6-12.7-22.2 C235,114,231.1,106.4,227.8,98.5z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M229.1,99.3c0,0,12.6,25.1-0.2,49c-12.7,23.7-41.5,24.8-41.5,24.8s-6.7-20.5,5.1-44.5 C204.4,104.5,229.1,99.3,229.1,99.3z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M227.4,99.3c-3.7,9.5-7.8,18.8-12.1,27.9c-4.3,9.1-8.8,18.3-13.8,27c3.6-9.5,7.8-18.8,12.1-27.9 C217.9,117.2,222.2,108.1,227.4,99.3z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M109.1,96.6c0,0-17.7,3.3-29.9-8.7C66.9,76,71.4,58.2,71.4,58.2s13.6-0.5,26.4,11 C110.3,80.7,109.1,96.6,109.1,96.6z","type":"path","fill":"#4B862D"},{"stroke":"none","path":"M109.1,96.6c-5.3-3.7-10.2-7.9-15.2-12.1c-4.8-4.3-9.5-8.7-13.8-13.5c5.3,3.7,10.2,7.9,15.2,12.1 C100.1,87.5,104.8,91.8,109.1,96.6z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M123,97.9c0,0,24.3-18.3,23.6-47.3C146,21.4,118.5,6.2,118.5,6.2s-16.3,16.6-16.6,45.6 C101.6,80.7,123,97.9,123,97.9z","type":"path","fill":"#6CB33F"},{"stroke":"none","path":"M123.7,96c-0.5-11-0.5-21.9-0.2-32.9c0.3-11,0.8-21.9,1.7-32.9c0.5,11,0.5,21.9,0.2,32.9 C125,74.1,124.7,85,123.7,96z","type":"path","fill":"#F9F7E7"},{"stroke":"none","path":"M600.1,78.4 506.9,79.3 392.2,80.4 185.2,35.5 187.1,45.8 277,77.1 112,97.4 99.3,119.3 316.5,89.8 \r\n\t391.4,114.6 600.1,127.2 z","type":"path","fill":"#A97C50"}],
        peas: [0,0,0,0,{type:'path',path:'M 171.2 0.1 C 171.5 3.6 172 28.3 166.4 35.6 C 159.2 45 152.5 49.6 144.4 50.8 C 139.6 51.5 135.6 51.8 119.9 48.6 C 106.4 45.8 100.5 49.1 97.6 54.5 C 94.1 61.1 97.6 66.9 101.8 70.5 C 108.6 76.2 120.2 72.6 119.2 81.8 C 118.9 84.3 116.4 87.4 112.6 89.4 C 100.4 95.8 93.1 89.8 89.4 85.9 C 81.1 77.1 75.7 71.3 66.7 69.3 C 64.1 68.7 51.3 67.1 44.7 79.2 C 41.1 85.7 42.5 95.3 47.5 100.6 C 55.2 108.8 70.2 104.7 72.8 104 C 80.5 102.1 83.4 102.2 89.7 102.9 C 91.5 103.1 98.4 104.6 102.9 108.2 C 108 112.2 111.1 117 110.2 126.5 C 109.4 134.4 105.4 141.9 99.5 149 C 85 166.6 61.5 161.4 49.2 151.3 C 38.6 142.6 35 115 5.6 123.7','fill':'none','stroke':'#6ebe45','stroke-width':'3','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'},{type:'path',path:'M 111.7 84.4 C 111.7 84.4 112.8 114.5 137.4 140.6 C 162 166.7 198.7 176.9 198.7 176.9 C 198.7 176.9 185.7 132.7 167 114.3 C 148.3 95.9 111.7 84.4 111.7 84.4Z','fill':'#6cbe45','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 138.4 100.1 C 142.6 102.8 143.3 108.2 140.1 112.2 C 136.9 116.2 130.9 117.2 126.8 114.5 C 122.6 111.8 121.9 106.4 125.1 102.4 C 128.3 98.4 134.2 97.4 138.4 100.1Z','fill':'#004712','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 153 116.5 C 157.1 119.2 157.9 124.6 154.7 128.6 C 151.5 132.6 145.5 133.6 141.4 130.9 C 137.3 128.2 136.5 122.8 139.7 118.8 C 142.9 114.8 148.9 113.8 153 116.5Z','fill':'#004712','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 167.9 133.1 C 172.1 135.8 172.8 141.2 169.6 145.2 C 166.4 149.2 160.4 150.2 156.3 147.5 C 152.1 144.8 151.4 139.4 154.6 135.4 C 157.8 131.4 163.7 130.4 167.9 133.1Z','fill':'#004712','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 183.3 147.2 C 187.5 149.9 188.2 155.3 185 159.3 C 181.8 163.3 175.8 164.3 171.7 161.6 C 167.5 158.9 166.8 153.5 170 149.5 C 173.2 145.5 179.2 144.5 183.3 147.2Z','fill':'#004712','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 122.8 87.8 L 114.1 81.8 L 109.5 83.5 L 112.4 93.3 L 112.4 93.3 C 112.2 97 113.5 99.1 109.5 100.5 C 115.7 101.5 118.5 97.9 116.2 92.6 C 120.6 92.6 126.6 93.5 126.9 87.5 C 125.3 87.4 124 87.6 122.8 87.8Z','fill':'#004712','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 92.8 101.6 C 92.8 101.6 72.6 116.3 65.7 145 C 58.8 173.8 68.5 203.5 68.5 203.5 C 68.5 203.5 93.1 174.3 97.3 153 C 101.4 131.8 92.8 101.6 92.8 101.6Z','fill':'#003501','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 94.1 127 C 94.1 131.1 90.7 134.1 86.5 133.7 C 82.3 133.3 78.9 129.8 78.8 125.7 C 78.8 121.6 82.2 118.6 86.4 119 C 90.6 119.3 94 122.9 94.1 127Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 89.4 144.5 C 89.4 148.6 86 151.6 81.8 151.2 C 77.6 150.8 74.2 147.3 74.1 143.2 C 74.1 139.1 77.5 136.1 81.7 136.5 C 86 136.9 89.4 140.4 89.4 144.5Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 84.7 162.3 C 84.7 166.4 81.3 169.4 77.1 169 C 72.9 168.6 69.5 165.1 69.4 161 C 69.4 156.9 72.8 153.9 77 154.3 C 81.3 154.6 84.7 158.2 84.7 162.3Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 82 179.3 C 82 183.4 78.6 186.4 74.4 186 C 70.2 185.6 66.8 182.1 66.7 178 C 66.7 173.9 70.1 170.9 74.3 171.3 C 78.5 171.6 82 175.2 82 179.3Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 95.4 110.7 L 95.6 102 L 92.4 99.6 L 87 106.1 L 87 106.1 C 84.4 107.6 83.5 109.6 80.7 107.4 C 82.9 112.1 86.5 112.3 89.2 108.3 C 91.2 111.3 93.3 115.8 97.6 113.2 C 96.9 112.2 96.1 111.4 95.4 110.7Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 19.3 121.2 C 19.3 121.2 25 112 18.7 101.9 C 11.9 91.1 2 93.5 2 93.5 C 2 93.5 -3.2 100.9 3 112.2 C 9.2 123.4 19.3 121.2 19.3 121.2Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 19.3 121.2 L 7.7 100.9 L 19.3 121.2','fill':'none','stroke':'#f9f7e7','stroke-width':'1.14','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'},{type:'path',path:'M 22.5 122.9 C 22.5 122.9 11.7 122.4 5.9 132.8 C -0.2 143.9 6.7 151.4 6.7 151.4 C 6.7 151.4 15.6 152.3 22.5 141.4 C 29.4 130.6 22.5 122.9 22.5 122.9Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 22.5 122.9 L 10.4 142.9 L 22.5 122.9','fill':'none','stroke':'#f9f7e7','stroke-width':'1.14','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'}],
        tomatoes: [0,0,0,0,{type:'path',path:'M 159.7 71.8 C 159.7 111.5 123.9 143.6 79.8 143.6 C 35.8 143.7 0 111.5 0 71.8 C 0 32.2 35.8 0 79.9 0 C 124 0 159.7 32.2 159.7 71.8Z','fill':'#ed2124','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 79.9 18 C 81.9 23.1 82.9 28.3 83.7 33.4 C 84.4 38.5 84.7 43.7 84.7 48.8 C 84.7 53.9 84.4 59.1 83.7 64.2 C 83 69.3 81.9 74.5 79.9 79.6 C 77.9 74.5 76.9 69.3 76.1 64.2 C 75.4 59.1 75.1 53.9 75.1 48.8 C 75.1 43.7 75.4 38.5 76.1 33.4 C 76.8 28.2 77.8 23.1 79.9 18Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 54.9 28.2 C 60.2 29.6 65 31.8 69.6 34.2 C 74.2 36.6 78.5 39.4 82.7 42.4 C 86.9 45.4 90.8 48.7 94.6 52.2 C 98.3 55.8 101.9 59.6 104.9 64.3 C 99.6 62.9 94.8 60.8 90.2 58.4 C 85.6 56 81.3 53.2 77.1 50.2 C 72.9 47.2 69 43.9 65.2 40.4 C 61.4 36.6 57.9 32.8 54.9 28.2Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 104.6 27.9 C 101.7 32.6 98.1 36.4 94.4 40.1 C 90.7 43.7 86.7 47 82.6 50.1 C 78.5 53.1 74.1 55.9 69.6 58.4 C 65 60.8 60.3 63.1 55 64.5 C 57.9 59.8 61.5 56 65.2 52.3 C 68.9 48.7 72.9 45.4 77 42.3 C 81.1 39.3 85.5 36.5 90 34 C 94.6 31.6 99.3 29.4 104.6 27.9Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 105.3 45.7 C 100.2 47.8 95.1 48.9 90 49.7 C 84.9 50.5 79.8 50.9 74.6 51 C 69.5 51.1 64.3 50.8 59.2 50.2 C 54.1 49.5 48.9 48.6 43.7 46.7 C 48.8 44.6 53.9 43.5 59 42.7 C 64.1 41.9 69.2 41.5 74.4 41.4 C 79.5 41.3 84.7 41.6 89.8 42.2 C 95 42.9 100.2 43.8 105.3 45.7Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 205.6 139.3 C 205.6 183.6 156.1 211.4 116.5 189.2 C 76.9 167 76.9 111.6 116.5 89.4 C 155.7 67.5 204.8 94.4 205.6 138.3','fill':'#ed2124','stroke':'#f9f7e7','stroke-width':'0.98','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'},{type:'path',path:'M 146.2 96.2 C 147.7 100.3 148.5 104.4 149.1 108.5 C 149.6 112.6 149.9 116.7 149.9 120.8 C 149.9 124.9 149.7 129 149.1 133.1 C 148.5 137.2 147.7 141.3 146.2 145.4 C 144.6 141.3 143.9 137.2 143.3 133.1 C 142.8 129 142.5 124.9 142.5 120.8 C 142.5 116.7 142.8 112.6 143.3 108.5 C 143.9 104.4 144.7 100.3 146.2 96.2Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 127.7 104.4 C 131.7 105.6 135.3 107.4 138.8 109.3 C 142.2 111.3 145.5 113.5 148.6 115.9 C 151.7 118.3 154.6 120.9 157.4 123.7 C 160.1 126.6 162.8 129.6 164.9 133.2 C 160.9 132 157.3 130.2 153.8 128.3 C 150.4 126.3 147.1 124.1 144 121.7 C 140.9 119.3 138 116.7 135.2 113.9 C 132.4 111 129.8 108 127.7 104.4Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 164.7 104.2 C 162.6 107.9 160 110.9 157.3 113.8 C 154.6 116.7 151.7 119.3 148.6 121.7 C 145.5 124.1 142.3 126.4 138.9 128.4 C 135.5 130.4 131.9 132.2 127.9 133.4 C 130 129.7 132.6 126.7 135.3 123.8 C 138 120.9 141 118.3 144 115.9 C 147.1 113.5 150.3 111.2 153.7 109.2 C 157.1 107.2 160.6 105.4 164.7 104.2Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 165.2 118.4 C 161.4 120 157.6 120.8 153.8 121.5 C 150 122.1 146.2 122.4 142.4 122.5 C 138.6 122.6 134.8 122.4 130.9 121.9 C 127.1 121.4 123.2 120.7 119.4 119.2 C 123.2 117.6 127 116.7 130.8 116.1 C 134.6 115.5 138.4 115.2 142.2 115.1 C 146 115 149.8 115.2 153.7 115.7 C 157.5 116.2 161.3 116.9 165.2 118.4Z','fill':'#6cb33f','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}]
    },

    start: {
        leaves: [
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:174,y:8} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:86,y:132} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:86,y:132} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:92,y:144} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:92,y:144} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:93,y:104} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:93,y:104} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:126,y:106} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:126,y:106} }}
        ],
        onions: [
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:44,y:134} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:49,y:87} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:142,y:156} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:130,y:90} }}
        ],
        orangeTree: [
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:193,y:38} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:193,y:38} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:67,y:84} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:67,y:84} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:177,y:41} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:177,y:41} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:186,y:46} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:186,y:46} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:115,y:97} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:115,y:97} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:82,y:131} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:82,y:131} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:124,y:113} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:124,y:113} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:159,y:110} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:159,y:110} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:315,y:90} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:315,y:90} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:308,y:89} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:308,y:89} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:104,y:110} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:104,y:110} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:189,y:40} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:189,y:40} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:247,y:113} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:247,y:113} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:170,y:109} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:170,y:109} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:229,y:101} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:229,y:101} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:225,y:101} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:225,y:101} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:108,y:96} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:108,y:96} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:124,y:96} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:124,y:96} }},
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:600,y:102} }}
        ],
        peas: [
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:286,y:0} }},	//vine
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:111,y:84} }},	//1pod
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:131,y:108} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:146,y:124} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:161,y:141} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:177,y:155} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:109,y:85} }},	//1cal
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:88,y:108} }},	//2pod
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:85,y:126} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:81,y:145} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:77,y:162} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:73,y:179} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:84,y:99} }},	//2cal
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:18,y:121} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:18,y:121} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:21,y:124} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:21,y:124} }},
        ],
        tomatoes: [
            {raphael:{ scaleX:0, scaleY:0, localPivot:{x:78,y:46} }},	//back
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:78,y:46} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:78,y:46} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:78,y:46} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:78,y:46} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:146,y:118} }},	//front
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:146,y:118} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:146,y:118} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:146,y:118} }},
            {raphael:{ scaleX:0, scaleY:0, opacity:0, localPivot:{x:146,y:118} }},
        ]
    },

    animations: {
        leaves: [
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:174,y:8} }, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:86,y:132} }, delay: 1.1, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:86,y:132} }, delay: 1.1, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:92,y:144} }, delay: 1.2, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:92,y:144} }, delay: 1.2, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:93,y:104} }, delay: 1, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:93,y:104} }, delay: 1, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:126,y:106} }, delay: 1.3, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:126,y:106} }, delay: 1.3, ease:Power1.easeInOut}
        ],
        onions: [
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:44,y:134} }, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:49,y:87} }, delay: 0.5, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:142,y:156} }, delay: 0.25, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:130,y:90} }, delay: 0.75, ease:Power1.easeInOut}
        ],
        orangeTree: [
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:193,y:38} }, delay: 1.5, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:193,y:38} }, delay: 1.5, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:67,y:84} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:67,y:84} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:177,y:41} }, delay: 1.4, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:177,y:41} }, delay: 1.4, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:186,y:46} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:186,y:46} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:115,y:97} }, delay: 1.3, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:115,y:97} }, delay: 1.3, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:82,y:131} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:82,y:131} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:124,y:113} }, delay: 1.2, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:124,y:113} }, delay: 1.2, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:159,y:110} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:159,y:110} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:315,y:90} }, delay: 1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:315,y:90} }, delay: 1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:308,y:89} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:308,y:89} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:104,y:110} }, delay: 1.2, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:104,y:110} }, delay: 1.2, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:189,y:40} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:189,y:40} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:247,y:113} }, delay: 1.3, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:247,y:113} }, delay: 1.3, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:170,y:109} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:170,y:109} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:229,y:101} }, delay: 1.4, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:229,y:101} }, delay: 1.5, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:225,y:101} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:225,y:101} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:108,y:96} }, delay: 1.5, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:108,y:96} }, delay: 1.5, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:124,y:96} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:124,y:96} }, delay: 1.1, ease: Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:600,y:102}, ease: Power1.easeInOut}}
        ],
        peasTop: [
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:286,y:0} }, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:111,y:84} }, delay: 1.6, ease:Power1.easeInOut},//pod1
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:131,y:108} }, delay: 2.0, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:146,y:124} }, delay: 2.2, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:161,y:141} }, delay: 2.1, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:177,y:155} }, delay: 2.4, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:109,y:85} }, delay: 1.0, ease:Power1.easeInOut},	//1cal
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:88,y:108} }, delay: 1.6, ease:Power1.easeInOut},	//2pod
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:85,y:126} }, delay: 2.3, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:81,y:145} }, delay: 2.6, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:77,y:162} }, delay: 2.5, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:73,y:179} }, delay: 2.8, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:84,y:99} }, delay: 1.1, ease:Power1.easeInOut},	//2cal
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:18,y:121} }, delay: 0.6, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:18,y:121} }, delay: 0.6, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:21,y:124} }, delay: 0.7, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:21,y:124} }, delay: 0.7, ease:Power1.easeInOut},

        ],
        peasBottom: [
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:286,y:0} }, delay: 0.8, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:111,y:84} }, delay: 2.4, ease:Power1.easeInOut},//pod1
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:131,y:108} }, delay: 2.8, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:146,y:124} }, delay: 3.0, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:161,y:141} }, delay: 2.9, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:177,y:155} }, delay: 3.2, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:109,y:85} }, delay: 1.8, ease:Power1.easeInOut},	//1cal
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:88,y:108} }, delay: 2.4, ease:Power1.easeInOut},	//2pod
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:85,y:126} }, delay: 3.1, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:81,y:145} }, delay: 3.4, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:77,y:162} }, delay: 3.3, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:73,y:179} }, delay: 3.6, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:84,y:99} }, delay: 1.9, ease:Power1.easeInOut},	//2cal
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:18,y:121} }, delay: 1.4, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:18,y:121} }, delay: 1.4, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:21,y:124} }, delay: 1.5, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:21,y:124} }, delay: 1.5, ease:Power1.easeInOut},

        ],
        tomatoes: [
            {raphael:{ scaleX:1, scaleY:1, localPivot:{x:78,y:46} }, delay: 0.7, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:78,y:46} }, delay: 0.5, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:78,y:46} }, delay: 0.5, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:78,y:46} }, delay: 0.5, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:78,y:46} }, delay: 0.5, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:146,y:118} }, delay: 0.2, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:146,y:118} }, delay: 0.0, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:146,y:118} }, delay: 0.0, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:146,y:118} }, delay: 0.0, ease:Power1.easeInOut},
            {raphael:{ scaleX:1, scaleY:1, opacity:1, localPivot:{x:146,y:118} }, delay: 0.0, ease:Power1.easeInOut},

        ]
    },

    // Animated Objects
    sections: {		//initialize empty sections
    	index: {
    		cropfield: null,
    		tomatoes: null
    	},
        about: {
            left: null,
            right: null
        },
        bottomLine: {
            onions: null
        },
        details: {
        	tomatoes:null
        },
        safety: {
        	topright: null,
        	bottomleft: null
        },
        technology: {
            orangeTree: null
        }
    },

    init: function(){		//run animations on page load.  model: id, data, start, anim, width, height.
        this.sections.about.left = this.createObject('about_leaves_left', this.data.leaves, this.start.leaves, this.animations.leaves, 184, 234);
        this.sections.about.right = this.createObject('about_leaves_right', this.data.leaves, this.start.leaves, this.animations.leaves, 184, 234);
        this.sections.bottomLine.onions = this.createObject('bottomline_onions', this.data.onions, this.start.onions, this.animations.onions, 202, 223);
        this.sections.details.tomatoes = this.createObject('details_tomatoes', this.data.tomatoes, this.start.tomatoes, this.animations.tomatoes, 231, 222);
        this.sections.safety.topright = this.createObject('safety_peas_topright', this.data.peas, this.start.peas, this.animations.peasTop, 199,204);
        this.sections.safety.bottomleft = this.createObject('safety_peas_bottomleft', this.data.peas, this.start.peas, this.animations.peasBottom, 199,204);
        this.sections.technology.orangeTree = this.createObject('technology_orangetree', this.data.orangeTree, this.start.orangeTree, this.animations.orangeTree, 600, 224);
        this.growCropField();

    },

    createObject: function(id, data, start, anim, width, height)		//runs on init; automatic animations
    {
        if (document.getElementById(id) !== null)
        {
            var elid = 0;
            var paper = Raphael(id, width, height);		//create a paper object in container [id] with [width] and [height]
            paper.setViewBox(0, 0, width, height );		//set the viewbox to the size of the paper
            paper.add(data);		//fill the paper with the elements from [data]	//**** add to those???
            paper.canvas.setAttribute('preserveAspectRatio', 'none');		//unlock aspect ratio
            paper.forEach(function(el){		//loop the objects in this class
                if (start[elid] !== undefined)		//if there is a start setting for property 0
                {
                    TweenLite.to(el, 0, start[elid]);	//run to the start setting for property 0
                }
                if (anim[elid] !== undefined)		//if there is an animation for object 0
                {
                    el.data('animation', anim[elid]);	//run the animation for object 0
                }
                elid++;		//increment the object index and loop back
            });
            return paper;		//return the entire paper, now populated
        }
    },

    animate: function(target){		//on-demand animations
        if (target && target !== undefined)
        {
            target.forEach(function (el) {
                TweenLite.to(el, 1, el.data('animation'));
            });
        }
    },

    growCropField: function() {
    	var wheatDelay = 0;
    	$('#wheat_1 .wheat-head, #wheat_2 .wheat-head').each(function() {
    		wheatDelay = Math.round(Math.random()*1000);
	    	$(this).delay(wheatDelay).animate({
	    		'background-size':'100%'
	    	},
	    	1500);
    	});
    }

};




/**
 * Javascript Initialization
 */

var FUSN = FUSN || {};

FUSN.init = function(){
    FUSN.RaphaelObjects.init();
    FUSN.Scroll.init();
    FUSN.Nav.init();
};

$(document).ready(function() {
    FUSN.init();
});
/**
 * Nav stuff
 */

var FUSN = FUSN || {};

FUSN.Nav = {

    init: function(){
        $('.nav-toggle').on('click', function(e){
            e.preventDefault();
            $('.top-bar ul, .top-bar .cover').show();
        });
        $('nav a:not(.nav-toggle)').on('click', function(e){
            if ($('.nav-toggle:visible').length){
                if ($(this).attr('href') == '#') e.preventDefault();
                $('.top-bar ul, .top-bar .cover').hide();
            }
        });
    }
};
/**
 * Scrolling stuff
 */

var FUSN = FUSN || {};

FUSN.Scroll = {

    init: function(){

        // Init Animated Stuff
        $('.animated').each(function() {
            var target = $(this).attr('data-target');
            if (target !== undefined)
            {
                var parts = target.split('.');
                var obj = FUSN.RaphaelObjects.sections[parts[0]][parts[1]];
                if (obj !== undefined)
                {
                    FUSN.RaphaelObjects.animate(obj);
                }
            }
        });
    }
};