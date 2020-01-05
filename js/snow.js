$(function(){
  var wh=$(window).height();
  setInterval(function(){
    var f=$(document).width();
    var e=Math.random()*f-100;//雪花的定位left值
    var o=0.3+Math.random();//雪花的透明度
    var fon=10+Math.random()*30;//雪花大小
    var l = e - 100 + 200 * Math.random();//雪花的横向位移
    var k=2000 + 5000 * Math.random();
    var html;
    switch(Math.floor(Math.random()*6+1)){
      case 1:
        html = "<div class='snow'><?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1556162121018\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"7476\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"32\" height=\"32\"><defs><style type=\"text/css\"></style></defs><path d=\"M511.999 880.914c0-114.626 92.922-207.548 207.548-207.548 0.002 114.624-92.922 207.548-207.548 207.548zM508.203 785.122H512.001c0-114.626-92.924-207.548-207.548-207.548v3.798c-0.002 112.528 91.222 203.75 203.75 203.75z\" fill=\"#36C9A3\" p-id=\"7477\"></path><path d=\"M416.209 82.648l95.79-63.86 95.792 63.86M543.931 82.648h-159.654v175.62\" fill=\"#FA004B\" p-id=\"7478\"></path><path d=\"M511.999 385.99c-70.538 0-127.722-57.182-127.722-127.722v-175.62h255.446v175.618c0 70.54-57.184 127.724-127.724 127.724z\" fill=\"#FA004B\" p-id=\"7479\"></path><path d=\"M527.613 337.76v-31.264c18.758 0 32.616-14.08 32.616-32.838h31.264c0.002 35.432-28.446 64.102-63.88 64.102z\" fill=\"#FFFFFF\" p-id=\"7480\"></path><path d=\"M719.549 657.732c-81.824 0-153.49 44.27-192.344 110.108a218.066 218.066 0 0 0-1.678-16.764v-123.09h18.758v-31.264h-18.758v-66.698h18.758V498.76h-18.758v-52.714l21.862 29.148 25.012-18.758-27.66-36.88h32.894v-31.264h-5.374c49.014-22.808 83.092-72.498 83.092-130.026V67.016h-42.83L511.999 0l-100.522 67.016h-42.83v191.252c0 57.528 34.078 107.218 83.092 130.026h-5.41v31.264h32.932l-27.66 36.88 25.012 18.758 17.654-23.54v95.042h-14.59v31.264h14.59v87.19c-38.816-61.938-107.682-103.212-186.016-103.212h-19.43v19.43c0 116.284 90.948 211.712 205.446 218.926v34.032h-14.59v31.264h14.59v112.552h-14.59v31.264h14.59v14.59h31.264v-79.202h18.758v-31.264h-18.758v-17.41c116.786-7.018 209.652-104.242 209.652-222.76v-15.632h-15.632v0.002z m-249.106 107.942c-81.816-16.738-144.466-86.752-149.968-172.076 85.324 5.502 155.336 68.152 172.076 149.968l-65.29-65.29-22.106 22.108 65.288 65.29z m41.556-728.1l44.232 29.488a192.342 192.342 0 0 0-12.302 0.626v-0.672h-76.096l44.166-29.442zM399.909 98.28h55.322a192.82 192.82 0 0 0-55.322 55.322V98.28z m112.09 272.076c-61.808 0-112.09-50.284-112.09-112.088 0-88.218 71.77-159.988 159.986-159.988h64.194v159.988c0.002 61.804-50.282 112.088-112.09 112.088z m42.496 490.17l64.35-64.35-22.106-22.108-64.402 64.402c7.876-35.052 25.484-67.236 51.506-93.26 32.374-32.376 74.28-51.76 119.386-55.532-7.1 83.916-68.444 152.622-148.734 170.848z\" fill=\"#232323\" p-id=\"7481\"></path></svg><div>";
        break;
      case 2:
        html = "<div class='snow'><?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1556162149131\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"7679\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"32\" height=\"32\"><defs><style type=\"text/css\"></style></defs><path d=\"M605.577 573.33l-24.754-10.439c-8.798-137.788-25.5-198.183-84.701-235.612-17.447-11.333-51.149-63.824-70.534-69.043 5.219-7.009 134.806-65.763 178.2-84.553 13.571 50.254 33.851 118.85 59.5 184.911 52.044 133.911-57.711 214.736-57.711 214.736zM852.374 586.154c-45.631 59.052 13.868 103.788-41.606 175.367-14.017 18.043-28.93 33.85-43.991 47.122-10.14 0.149-18.938-2.386-25.947-7.755-32.508-25.35-13.868-103.788 41.606-175.366 14.166-18.343 33.254-35.044 53.385-49.211 17.299-4.473 25.65-1.938 16.553 9.843zM640.472 771.662c0 16.254-11.483 31.315-30.868 43.543-9.395 0.745-18.939 1.193-28.78 1.193-90.666 0-89.473-74.561-164.034-74.561-25.202 0 1.193-23.561 45.035-44.14h0.149c4.92-0.447 9.692-0.596 14.464-0.596 90.667 0 164.034 33.403 164.034 74.561z\" fill=\"#E27E47\" p-id=\"7680\"></path><path d=\"M580.674 578.698c-54.28-0.745-163.121-16.993-203.7-120.789-34.746-88.876-49.658-103.788-94.394-148.525 144.051-23.561 341.936-98.569 298.094 269.314z\" fill=\"#E27E47\" p-id=\"7681\"></path><path d=\"M342.818 203.782v44.736c65.071 0 114.431 18.432 146.708 54.784 43.708 49.225 60.127 133.293 48.887 250.069l-57.957 25.132c-3.394 0.184-8.088 0.357-13.765 0.357-117.217 0-154.832-57.067-166.839-91.134-30.292-85.633-68.811-168.051-93.214-217.401 18.983-5.652 42.641-11.675 68.549-15.957 23.724-3.88 46.474-5.849 67.616-5.85l0.015-44.736m-0.016 0c-25.824 0.001-51.255 2.579-74.835 6.436-70.386 11.632-124.517 34.746-124.517 34.746s67.702 126.157 114.228 257.682c38.292 108.647 157.128 120.951 209.014 120.951 15.199 0 24.66-1.057 24.66-1.057l88.728-38.474c0.298-1.789 0.447-3.579 0.596-5.368 36.663-307.662-105.941-374.922-237.874-374.916z\" fill=\"#0F3944\" p-id=\"7682\"></path><path d=\"M553.57 158.757a2316.936 2316.936 0 0 0 7.028 26.589c19.047 70.534 39.566 134.271 60.992 189.454 34.178 87.943-21.179 144.319-38.409 159.138l-2.717 1.014c-3.823-97.474-24.543-175.403-61.745-232.055-13.382-20.587-29.33-38.838-47.552-54.375a233.188 233.188 0 0 0-29.158-21.018c36.687-31.515 79.871-54.428 111.561-68.747m31.28-60.529s-145.692 46.228-218.91 145.096c27.289 7.307 53.236 19.833 76.35 39.367 14.166 12.079 27.289 26.693 38.921 44.588 35.938 54.727 58.009 138.683 54.877 264.243l-58.455 28.333 0.895 0.895 115.867-43.246 11.184-4.175s109.754-80.825 57.711-214.736c-25.649-66.061-45.93-134.657-59.5-184.911-12.23-45.182-18.94-75.454-18.94-75.454z\" fill=\"#0F3944\" p-id=\"7683\"></path><path d=\"M391.187 163.407c16.335 0 31.63 4.469 43.647 12.663-13.123 9.692-25.799 20.43-37.728 31.912-17.748-2.863-35.863-4.138-53.798-4.139a395.9 395.9 0 0 0-30.009 1.156c9.693-15.509 25.649-28.632 45.93-35.939 10.688-3.833 21.535-5.653 31.958-5.653m0.001-44.737c-15.911 0-31.745 2.786-47.063 8.28-28.985 10.443-53.384 29.733-68.762 54.338l-46.894 75.031 88.225-6.713a352.51 352.51 0 0 1 26.614-1.027c16.297 0 32 1.2 46.673 3.567l22.054 3.558 16.095-15.492c10.596-10.199 21.794-19.672 33.283-28.158l50.695-37.443-52.072-35.504c-19.609-13.37-43.416-20.437-68.848-20.437zM729.884 928.219a22.185 22.185 0 0 1-15.757-6.531c-1.646-1.638-17.322-17.745-61.731-76.956l-7.638-10.063c-22.856-29.941-46.491-60.901-56.175-118.977-13.66-81.937-56.911-135.578-57.348-136.11-7.806-9.546-6.437-23.635 3.095-31.463 9.509-7.842 23.577-6.51 31.426 3.014 2.09 2.519 51.231 62.882 66.952 157.204 7.857 47.11 26.278 71.241 47.613 99.186l7.871 10.369c42.414 56.554 57.501 72.092 57.646 72.245 8.621 8.789 8.556 22.929-0.197 31.594a22.33 22.33 0 0 1-15.757 6.488z\" fill=\"#0F3944\" p-id=\"7684\"></path><path d=\"M476.438 741.837c65.171 0 105.516 18.727 117.054 29.696-1.697 1.584-4.203 3.593-7.735 5.82-18.518 11.666-56.96 24.132-109.319 24.132-30.097 0-41.629-10.612-60.735-28.193-5.072-4.668-10.59-9.746-16.773-14.774 19.977-7.631 42.738-14.067 64.816-16.085h0.255l2.019-0.183c3.101-0.282 6.412-0.413 10.418-0.413m0-44.736c-4.772 0-9.544 0.149-14.464 0.596h-0.149c-88.131 7.158-191.771 73.965-149.42 73.965 74.561 0 73.368 74.561 164.034 74.561 54.877 0 103.341-12.228 133.166-31.018 19.386-12.228 30.868-27.289 30.868-43.543-0.001-41.158-73.368-74.561-164.035-74.561z\" fill=\"#0F3944\" p-id=\"7685\"></path><path d=\"M788.972 646.709c0.185 7.908 0.806 15.329 1.377 22.152 2.166 25.876 3.473 41.495-14.909 65.215-11.942 15.371-24.807 29.167-38.225 40.99-26.652 23.465-47.031 31.72-57.145 33.318-1.589-15.88 8.332-59.209 48.242-110.705 15.08-19.442 38.141-37.21 60.66-50.97m59.918-72.471c-3.367 0-7.804 0.712-13.069 2.074-34.745 8.799-105.727 46.079-142.858 93.947-55.474 71.578-74.114 150.016-41.606 175.366 6.883 5.288 15.474 7.8 25.274 7.8 25.02 0 57.893-16.386 90.146-44.782 15.061-13.272 29.974-29.079 43.991-47.122 55.474-71.579-4.026-116.316 41.606-175.367 6.329-8.196 4.214-11.917-3.484-11.916zM591.228 615.637l18.639 59.322 42.055-45.803-60.694-13.519z\" fill=\"#0F3944\" p-id=\"7686\"></path><path d=\"M658.755 834.616l-15.637 60.943 60.596-16.93-44.959-44.013z\" fill=\"#0F3944\" p-id=\"7687\"></path></svg><div>";
        break;
      case 3:
        html = "<div class='snow'><?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1556162160024\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"7817\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"32\" height=\"32\"><defs><style type=\"text/css\"></style></defs><path d=\"M823.6 238.8c0.1-1.9 0.4-3.7 0.4-5.6 0-69-76.7-107.1-171.2-107.1-22 0-25.4 20.6-44.4 26.4-0.3 0.1-0.7 0.1-0.9-0.1-28.5-17.9-58-40.1-95.4-40.1-38.6 0-73.6 14.9-106.9 40.4-0.3 0.2-0.7 0.3-1 0.2-19.2-6-17.8-26.7-36.7-26.7-94.6 0-171.2 38.1-171.2 107.1 0 4.9 0.5 9.8 1.3 14.6v0.4c-1.7 6.6-2.7 13.2-2.7 20v282.5c0 174.3 141.3 315.5 315.5 315.5h3.6c174.3 0 315.5-141.3 315.5-315.5V268.2c-0.2-10-2.2-19.9-5.9-29.4z\" fill=\"#F94848\" p-id=\"7818\"></path><path d=\"M513.8 881.8h-3.6c-182.5 0-331-148.5-331-331V268.2c0-6.8 0.8-13.8 2.5-20.9-0.7-5-1-9.6-1-14 0-73.4 75.1-122.6 186.8-122.6 17.9 0 26.1 11.1 31.6 18.5 1.7 2.4 3.1 4.2 4.5 5.6 35.7-25.4 71.3-37.9 108.6-37.9 37.5 0 67.4 19.2 93.7 36.1 1.1 0.7 2.2 1.4 3.2 2.1 2.2-1.6 4.4-3.8 7.2-6.6 7.5-7.5 17.8-17.9 36.6-17.9 111.7 0 186.8 49.3 186.8 122.6 0 1.2-0.1 2.3-0.2 3.5 3.6 10.4 5.5 21 5.5 31.5v282.5c-0.2 182.6-148.7 331.1-331.2 331.1zM367.4 141.6c-77.5 0-155.7 28.3-155.7 91.6 0 3.6 0.4 7.6 1.1 12.1 0.3 2.1 0.2 4.6-0.3 6.6-1.5 5.8-2.2 11.1-2.2 16.3v282.5c0 165.4 134.6 300 300 300h3.6c165.4 0 300-134.6 300-300V268.2c0-7.8-1.6-15.8-4.7-23.8-0.8-2.1-1.2-4.3-1-6.6l0.2-2.5c0.1-0.7 0.2-1.4 0.2-2.1 0-63.3-78.2-91.6-155.7-91.6-5.6 0-8.1 2.2-14.6 8.7-5.9 6-13.3 13.4-25.3 17-4.3 1.3-9.9 0.6-13.7-1.8-3.4-2.2-6.8-4.3-10.3-6.5-23.8-15.3-48.5-31.2-76.9-31.2-32.9 0-64.8 12.2-97.5 37.2-4 3.1-10.4 4.2-15.2 2.6-13.7-4.3-20.7-13.8-25.4-20.1-4.4-5.9-4.7-5.9-6.6-5.9z\" fill=\"#1B1C26\" p-id=\"7819\"></path><path d=\"M512 343.5m-125.5 0a125.5 125.5 0 1 0 251 0 125.5 125.5 0 1 0-251 0Z\" fill=\"#FC5E5E\" p-id=\"7820\"></path><path d=\"M512 484.6c-77.8 0-141.1-63.3-141.1-141.1S434.2 202.4 512 202.4s141.1 63.3 141.1 141.1S589.8 484.6 512 484.6z m0-251.1c-60.7 0-110 49.4-110 110s49.4 110 110 110 110-49.4 110-110-49.3-110-110-110z\" fill=\"#1B1C26\" p-id=\"7821\"></path><path d=\"M447 352.4S413.2 233.2 311.3 208c-90.2-22.3-116.6 65.7-116.6 65.7\" fill=\"#F94848\" p-id=\"7822\"></path><path d=\"M447 367.9c-6.8 0-13-4.5-14.9-11.3-0.3-1.1-32.8-110.9-124.5-133.6-75-18.6-97.1 52.1-98.1 55.1-2.5 8.2-11.1 12.9-19.3 10.4s-12.9-11.1-10.4-19.3c10.6-35.4 52.6-96.8 135.2-76.3C424.4 220 460.4 343 461.9 348.2c2.3 8.3-2.4 16.8-10.7 19.2-1.4 0.3-2.8 0.5-4.2 0.5z\" fill=\"#1B1C26\" p-id=\"7823\"></path><path d=\"M577.5 352.4S611.3 233.2 713.2 208c90.2-22.3 116.6 65.7 116.6 65.7\" fill=\"#F94848\" p-id=\"7824\"></path><path d=\"M577.5 367.9c-1.4 0-2.8-0.2-4.2-0.6-8.2-2.3-13-10.9-10.7-19.2C564 343 600.1 220 709.4 193c82.7-20.5 124.6 41 135.2 76.3 2.5 8.2-2.2 16.9-10.4 19.3-8.2 2.5-16.9-2.2-19.3-10.4-2.3-7.5-24.8-73.2-98.1-55.1-92 22.8-124.1 132.4-124.5 133.6-1.8 6.8-8 11.2-14.8 11.2z\" fill=\"#1B1C26\" p-id=\"7825\"></path><path d=\"M320.8 451.5s4.1-110-126.2-123.7\" fill=\"#F94848\" p-id=\"7826\"></path><path d=\"M320.9 467h-0.6c-8.5-0.3-15.2-7.5-14.9-16 0.1-4 1.3-95.8-112.3-107.8-8.5-0.9-14.7-8.5-13.8-17.1 0.9-8.5 8.7-14.7 17.1-13.8 143 15 140.1 138.5 140 139.7-0.4 8.4-7.2 15-15.5 15z\" fill=\"#1B1C26\" p-id=\"7827\"></path><path d=\"M265.5 510.8S287.3 297 551.1 297c196.4 0 278.2 184.5 278.2 184.5\" fill=\"#F94848\" p-id=\"7828\"></path><path d=\"M265.5 526.3c-0.5 0-1.1 0-1.6-0.1-8.5-0.9-14.7-8.5-13.9-17 0.2-2.3 26.4-227.8 301.1-227.8 204.1 0 291.5 191.8 292.4 193.7 3.5 7.8-0.1 17-7.9 20.5-7.8 3.5-17 0-20.5-7.9-3.2-7.2-80.4-175.3-264-175.3-247 0-269.3 191.7-270.2 199.9-0.8 8-7.5 14-15.4 14z\" fill=\"#1B1C26\" p-id=\"7829\"></path><path d=\"M404.7 153s-44.6 14.2-58.5 60.3\" fill=\"#FFFFFF\" p-id=\"7830\"></path><path d=\"M346.1 228.8c-1.5 0-3-0.2-4.5-0.7-8.2-2.5-12.8-11.1-10.4-19.4 16.1-53.3 66.5-69.9 68.7-70.6 8.1-2.6 16.9 1.9 19.5 10.1 2.6 8.1-1.9 16.8-10 19.5-1.7 0.6-37.2 12.8-48.4 50-2 6.8-8.2 11.1-14.9 11.1z\" fill=\"#1B1C26\" p-id=\"7831\"></path><path d=\"M607.8 152.7s49 14.6 62.9 60.6\" fill=\"#FFFFFF\" p-id=\"7832\"></path><path d=\"M670.7 228.8c-6.7 0-12.8-4.3-14.8-11-11.3-37.2-52.2-50.1-52.6-50.3-8.2-2.5-12.8-11.2-10.3-19.3 2.5-8.2 11.1-12.8 19.2-10.4 2.3 0.7 57.2 17.6 73.4 71 2.5 8.2-2.2 16.9-10.4 19.4-1.5 0.4-3 0.6-4.5 0.6z\" fill=\"#1B1C26\" p-id=\"7833\"></path><path d=\"M813.5 893.4c-110.5 52.7-257.9-26-257.9-26s31.6-164.1 142.1-216.8 257.9 26 257.9 26-31.7 164.1-142.1 216.8z\" fill=\"#3FBC74\" p-id=\"7834\"></path><path d=\"M726 927.2c-90 0-173.1-43.6-177.7-46.1-6-3.2-9.2-9.9-7.9-16.6 1.4-7 34.4-172.5 150.6-227.9 116.2-55.4 265.6 23 271.9 26.3 6 3.2 9.2 9.9 7.9 16.6-1.4 7-34.4 172.5-150.6 227.9-30.2 14.4-62.6 19.8-94.2 19.8z m-152.5-68.3c34.7 16 147.7 61.4 233.3 20.6 85.8-41 121.5-157.2 130.8-194.3-34.7-16-147.7-61.4-233.3-20.6-85.6 40.8-121.4 157.2-130.8 194.3z m240 34.5z\" fill=\"#1B1C26\" p-id=\"7835\"></path><path d=\"M555.6 882.9c-5.8 0-11.4-3.3-14-8.8-3.7-7.7-0.4-17 7.3-20.7l303.4-144.7c7.8-3.7 17-0.4 20.7 7.3s0.4 17-7.3 20.7L562.2 881.4c-2.1 1-4.4 1.5-6.6 1.5z\" fill=\"#1B1C26\" p-id=\"7836\"></path><path d=\"M792.5 865c-2.4 0-4.9-0.6-7.2-1.8l-94.8-49.9c-7.6-4-10.5-13.4-6.5-21s13.4-10.5 21-6.5l94.8 49.9c7.6 4 10.5 13.4 6.5 21-2.8 5.3-8.2 8.3-13.8 8.3z\" fill=\"#1B1C26\" p-id=\"7837\"></path><path d=\"M637.6 824.8c-1 0-2-0.1-3-0.3-8.4-1.7-13.9-9.8-12.2-18.2l26.1-131.2c1.7-8.4 9.8-13.8 18.2-12.2 8.4 1.7 13.9 9.8 12.2 18.2l-26.1 131.2c-1.5 7.4-8 12.5-15.2 12.5z\" fill=\"#1B1C26\" p-id=\"7838\"></path><path d=\"M210.5 893.4c110.5 52.7 257.9-26 257.9-26s-31.6-164.1-142.1-216.8-257.9 26-257.9 26 31.7 164.1 142.1 216.8z\" fill=\"#3FBC74\" p-id=\"7839\"></path><path d=\"M298 927.2c-31.6 0-64-5.4-94.2-19.8C87.6 852 54.6 686.6 53.2 679.5c-1.3-6.7 1.9-13.4 7.9-16.6 6.3-3.4 155.7-81.8 271.9-26.3C449.2 692 482.3 857.5 483.7 864.5c1.3 6.7-1.9 13.4-7.9 16.6-4.7 2.5-87.8 46.1-177.8 46.1zM86.4 685.1c9.4 37.1 45.2 153.4 130.8 194.3 85.7 40.9 198.6-4.5 233.3-20.6-9.4-37.1-45.2-153.4-130.8-194.3-85.9-40.9-198.6 4.6-233.3 20.6z\" fill=\"#1B1C26\" p-id=\"7840\"></path><path d=\"M468.4 882.9c-2.2 0-4.5-0.5-6.7-1.5L158.4 736.7c-7.7-3.7-11-13-7.3-20.7s13-11 20.7-7.3l303.4 144.7c7.7 3.7 11 13 7.3 20.7-2.7 5.6-8.3 8.8-14.1 8.8z\" fill=\"#1B1C26\" p-id=\"7841\"></path><path d=\"M231.5 865c-5.6 0-11-3-13.8-8.3-4-7.6-1.1-17 6.5-21l94.8-49.9c7.6-4 17-1.1 21 6.5s1.1 17-6.5 21l-94.8 49.9c-2.3 1.2-4.8 1.8-7.2 1.8z\" fill=\"#1B1C26\" p-id=\"7842\"></path><path d=\"M396.9 840.1c-7.3 0-13.7-5.1-15.2-12.5l-29.1-146.4c-1.7-8.4 3.8-16.6 12.2-18.2 8.4-1.6 16.6 3.8 18.2 12.2l29.1 146.4c1.7 8.4-3.8 16.6-12.2 18.2-1 0.2-2 0.3-3 0.3z\" fill=\"#1B1C26\" p-id=\"7843\"></path><path d=\"M431.7 330.5c-5.7 0-11.2-3.1-13.9-8.6-18.6-37.2-52.9-84.6-110.2-98.8-75-18.6-97.1 52.1-98.1 55.1-2.5 8.2-11.1 12.9-19.3 10.4s-12.9-11.1-10.4-19.3c10.6-35.4 52.5-96.8 135.2-76.3 68.9 17.1 109 72 130.5 115 3.8 7.7 0.7 17-6.9 20.8-2.2 1.1-4.5 1.7-6.9 1.7z\" fill=\"#1B1C26\" p-id=\"7844\"></path><path d=\"M600.3 316.5c-2.6 0-5.3-0.7-7.7-2.1-7.4-4.3-10-13.8-5.7-21.2 21.3-37.2 59.9-84.7 122.6-100.3 83-20.6 123 40.8 132.6 76.2 2.2 8.3-2.7 16.8-10.9 19s-16.8-2.6-19-10.9c-2.1-7.4-22.4-72.2-95.2-54.1-52 12.9-84.8 53.7-103.1 85.6-3 5-8.3 7.8-13.6 7.8z\" fill=\"#1B1C26\" p-id=\"7845\"></path><path d=\"M309.3 415.7c-5.9 0-11.5-3.4-14.1-9-16.9-36.8-51.3-58.2-102.1-63.5-8.5-0.9-14.7-8.5-13.8-17.1 0.9-8.5 8.7-14.7 17.1-13.8 77.9 8.2 112.1 48.8 127.1 81.4 3.6 7.8 0.2 17-7.6 20.6-2.2 0.9-4.4 1.4-6.6 1.4z\" fill=\"#1B1C26\" p-id=\"7846\"></path><path d=\"M265.5 526.3c-0.5 0-1.1 0-1.6-0.1-8.5-0.9-14.7-8.5-13.9-17 0.2-2.3 26.4-227.8 301.1-227.8 204.1 0 291.5 191.8 292.4 193.7 3.5 7.8-0.1 17-7.9 20.5-7.8 3.5-17 0-20.5-7.9-3.2-7.2-80.4-175.3-264-175.3-247 0-269.3 191.7-270.2 199.9-0.8 8-7.5 14-15.4 14z\" fill=\"#1B1C26\" p-id=\"7847\"></path><path d=\"M346.1 228.8c-1.5 0-3-0.2-4.5-0.7-8.2-2.5-12.8-11.1-10.4-19.4 16.1-53.3 66.5-69.9 68.7-70.6 8.1-2.6 16.9 1.9 19.5 10.1 2.6 8.1-1.9 16.8-10 19.5-1.7 0.6-37.2 12.8-48.4 50-2 6.8-8.2 11.1-14.9 11.1z\" fill=\"#1B1C26\" p-id=\"7848\"></path><path d=\"M670.7 228.8c-6.7 0-12.8-4.3-14.8-11-11.3-37.2-52.2-50.1-52.6-50.3-8.2-2.5-12.8-11.2-10.3-19.3 2.5-8.2 11.1-12.8 19.2-10.4 2.3 0.7 57.2 17.6 73.4 71 2.5 8.2-2.2 16.9-10.4 19.4-1.5 0.4-3 0.6-4.5 0.6z\" fill=\"#1B1C26\" p-id=\"7849\"></path><path d=\"M735.3 265.1m-20.3 0a20.3 20.3 0 1 0 40.6 0 20.3 20.3 0 1 0-40.6 0Z\" fill=\"#FCDB75\" p-id=\"7850\"></path></svg><div>";
        break;
      case 4:
        html = "<div class='snow'><?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1556162189828\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"8117\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"32\" height=\"32\"><defs><style type=\"text/css\"></style></defs><path d=\"M400.4 314.7c14.7-45.2 45.2-82.8 80.5-113.3-37-25.4-74-42.1-101.3-52.3 9.8 24.7 15.7 58.1 2.7 96.1-2.7 7.8-6.4 16.4-10.3 25.4-12.5 28.8-28 64.6-28.1 112.8-0.1 34.5 10.6 62.6 31.6 83.6 13.6 13.5 30 22.8 46.5 29.2-5-6.2-10.1-13.4-14.8-21.7-16.8-30.5-31.8-82.9-6.8-159.8z\" fill=\"#FDCDE1\" p-id=\"8118\"></path><path d=\"M646.7 473c20.1-21.6 28.9-50.8 26.2-86.8-3.4-46.2-15.2-66.9-27.7-88.9-6.5-11.4-13.1-23.2-18.5-38.1-14.3-40.3-7.3-78.6 3.3-106.7-61.1 27-166.5 85-195.2 173.5-39 120.1 33.3 165.1 36.4 166.9 0.4 0.2 0.7 0.4 1.1 0.7 16.7 11.5 43.6 18.3 71.9 18.3 42.2 0 79.6-14.2 102.5-38.9zM510.7 178c23.7-17 48.1-31.2 70.3-42.5l-37.3-33.1c-48.2 13.4-78.7 27.2-96.4 36.9 19.7 10.1 41.1 22.6 62.5 38 0.3 0.2 0.6 0.4 0.9 0.7z\" fill=\"#FDCDE1\" p-id=\"8119\"></path><path d=\"M737.6 686.6c-2.9-5.2-8.2-8.7-14.2-9.2-17.5-1.6-34.3-2.4-49.8-2.4-64.2 0-111.6 13.6-141.4 40.5V547.9c4 0.2 8 0.4 12 0.4 52.2 0 99.3-18.4 129.1-50.5 26.8-28.9 39.2-68.4 35.8-114.2-4-54.4-19.1-80.8-32.3-104.1-6-10.5-11.6-20.4-15.8-32.4-21.3-59.9 22.1-117.7 22.5-118.3 4.9-6.3 5.1-15 0.5-21.5s-12.8-9.3-20.4-6.9c-2.5 0.8-20.9 6.8-47.1 18.2l-56.2-49.9c-4.6-4-10.8-5.5-16.7-4-83.7 22.1-122.3 46.2-135.9 56.4-4-1.7-40.8-14.9-49.2-17.3-16.4-4.7-20.3-5.9-27.1-2.3-5.1 2.6-8.6 7.4-9.6 13s0.7 11.3 4.6 15.5c0.4 0.4 41.3 45.3 21.4 103.5-2.2 6.5-5.5 14-9.3 22.7-13.1 30.2-31 71.4-31.1 127.2-0.1 44.6 14.1 81.4 42.3 109.4 45.8 45.6 112.7 53.1 146 53.8v113.1c-29.5-29.4-78.3-44.3-145.4-44.3-15.5 0-32.3 0.8-49.8 2.4-6 0.5-11.3 4-14.2 9.2-2.9 5.2-3.1 11.5-0.5 16.9 48.2 98.1 102.7 147.8 162 147.9 19.5 0 35.8-5.7 47.9-12v165c0 10 8.1 18.2 18.2 18.2 10 0 18.2-8.1 18.2-18.2V841.3c11.6 5.5 26.5 10 43.9 10 59.2 0 113.7-49.7 162-147.9 2.7-5.3 2.6-11.6-0.4-16.8z\" fill=\"#E66978\" p-id=\"8120\"></path><path d=\"M489.6 741c-6.9 5.2-21.9 14.5-41.6 14.5-39.2 0-79.2-35.6-116.7-103.3 6.6-0.3 13-0.4 19.2-0.4 61.2 0 104.4 13.7 125.1 39.6 15 18.9 15 40 14 49.6z\" fill=\"#FFD976\" p-id=\"8121\"></path><path d=\"M543.7 102.3l37.3 33.1c-22.2 11.3-46.6 25.5-70.3 42.5-0.3-0.2-0.6-0.5-0.9-0.7-21.4-15.4-42.9-27.9-62.5-38 17.7-9.7 48.2-23.4 96.4-36.9zM375.6 467.1c-21.1-20.9-31.7-49.1-31.6-83.6 0.1-48.2 15.6-84 28.1-112.8 3.9-9.1 7.6-17.6 10.3-25.4 13-38 7.1-71.5-2.7-96.1 27.3 10.2 64.2 26.9 101.3 52.3-35.3 30.5-65.8 68.2-80.5 113.3-25 76.8-10 129.3 7 159.8 4.7 8.4 9.7 15.6 14.8 21.7-16.8-6.5-33.2-15.8-46.7-29.2z\" fill=\"#FFAEBF\" p-id=\"8122\"></path><path d=\"M472.4 493.6c-0.4-0.3-0.7-0.4-1.1-0.7-3.1-1.9-75.4-46.9-36.4-166.9 28.8-88.5 134.2-146.5 195.2-173.5-10.6 28.1-17.7 66.3-3.3 106.7 5.3 15 12 26.7 18.5 38.1 12.5 21.9 24.2 42.7 27.7 88.9 2.7 36-6.1 65.2-26.2 86.8-23 24.7-60.3 38.9-102.5 38.9-28.3 0-55.2-6.9-71.9-18.3z\" fill=\"#FFAEBF\" p-id=\"8123\"></path><path d=\"M576.1 815c-19.7 0-34.8-9.3-41.6-14.5-1-9.7-1-30.8 14.1-49.6 20.6-25.9 63.9-39.6 125.1-39.6 6.2 0 12.6 0.1 19.2 0.4C655.4 779.4 615.3 815 576.1 815z\" fill=\"#FFD976\" p-id=\"8124\"></path></svg><div>";
        break;
      case 5:
        html = "<div class='snow'><?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1556162204294\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"8397\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"32\" height=\"32\"><defs><style type=\"text/css\"></style></defs><path d=\"M 511.15 1010.1 c -12.2576 0 -22.2094 -9.95177 -22.2094 -22.2094 V 443.821 c 0 -12.2576 9.95177 -22.2094 22.2094 -22.2094 c 12.2576 0 22.2094 9.95177 22.2094 22.2094 v 544.07 c 0 12.2576 -9.95177 22.2094 -22.2094 22.2094 Z\" fill=\"#1daa6a\" p-id=\"8398\"></path><path d=\"M 346.097 26.0897 l -67.5991 267.12 c 0 25.0007 4.00498 49.0306 11.2867 71.6042 c 9.8304 -27.5493 34.9525 -48.5452 60.6815 -75.245 c 43.5693 -45.0256 199.763 -86.1677 262.751 -123.426 c -30.3408 -105.586 -267.12 -140.052 -267.12 -140.052 Z\" fill=\"#dd6472\" p-id=\"8399\"></path><path d=\"M 512.971 158.254 c -62.9874 37.2585 -124.518 79.9781 -168.087 125.004 c -25.729 26.6998 -45.2684 54.1279 -55.0988 81.6773 c 11.7723 36.5302 32.4039 69.1769 59.2251 95.5126 c 42.3557 41.5061 100.124 67.1137 163.718 67.1137 c 128.887 0 234.23 -105.464 234.23 -234.23 l -66.8709 -264.571 c 0.242725 -0.121363 -37.2585 52.7929 -167.117 129.494 Z\" fill=\"#d1525c\" p-id=\"8400\"></path><path d=\"M 513.578 712.155 c -4.49043 -11.4081 29.1271 -79.8568 79.8568 -115.902 c 37.7439 -26.8212 122.576 -36.4089 126.339 -26.6998 s -47.4529 74.881 -86.6531 99.1536 c -49.5161 30.8261 -114.93 54.856 -119.542 43.448 Z\" fill=\"#1daa6a\" p-id=\"8401\"></path><path d=\"M 295.973 685.454 c 8.61677 -8.8595 84.8327 -6.06815 138.354 25.4862 c 39.9284 23.5444 83.3763 96.9691 76.0946 104.372 s -87.7454 -12.6218 -125.974 -38.472 c -48.3024 -32.768 -97.0903 -82.6482 -88.4736 -91.3863 Z\" fill=\"#1daa6a\" p-id=\"8402\"></path></svg><div>";
        break;
      case 6:
        html = "<div class='snow'>❅<div>";
        break;
    }
    $(html).clone().appendTo("body").css({
      left:e+"px",
      opacity:o,
      "font-size":fon,
    }).animate({
      top:(wh*2)+"px",
      left:l+"px",
      opacity:0.1,
    },k,"linear",function(){$(this).remove()})
  },800)
})