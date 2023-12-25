"use client"
import { useRevealStroke } from '@/hooks/revealStroke';
import React from 'react'

const WhySvg = () => {
  useRevealStroke('#why-stroke', ['p', 'o', 'c', 'e', 'm', 'u'], 0.6);
  
  return (
    <svg id='why-stroke' className='w-full' viewBox="0 0 506 174" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Почему</title>
      <defs>
        <g>
          <mask id='mask-why-p'>
            <path className="mask" id="mask-p" d="M23.5 16C33.1667 16.1667 42.8 41.5 4 129.5C50.0342 51.0227 126.5 -65 103 58.5C103 58.5 85 118.5 68.5 124.5" strokeWidth="7"/>
          </mask>
          <mask id='mask-why-o'>
            <path className="mask" id="mask-o" d="M173.5 70.5C157.5 72.8333 123.4 77.1 127 71.5C130.6 65.9 135.166 69.1667 137 71.5C138.333 82.3333 137 100.5 126 98C122 95.5 121 85 135 73" strokeWidth="7"/>
          </mask>
          <mask id='mask-why-c'>
            <path className="mask" id="mask-c" d="M161.5 72C168.333 70.1667 182.1 68.1 182.5 74.5C183 82.5 171.5 86 178.5 94C185.5 102 204.5 75.5 209.5 78.5C214.5 81.5 194 101.5 242 86L262.5 81" strokeWidth="7"/>
          </mask>
          <mask id='mask-why-e'>
            <path className="mask" id="mask-e" d="M255.5 83.5C263 88 277 81 273.5 72.5C269.177 62 254 95.5 264.5 91C283.5 96 329.5 61.5 331.5 69" strokeWidth="7"/>
          </mask>
          <mask id='mask-why-m'>
            <path className="mask" id="mask-m" d="M312 75.5C320 69.8333 335.2 61.3 332 72.5L321.5 94L349 69L336.5 101L367 75.5L360.5 94L428.5 82" strokeWidth="7"/>
          </mask>
          <mask id='mask-why-u'>
            <path className="mask" id="mask-u" d="M431 73L427.5 98L471 67.5L445 134L422 171.5L424 146L445 122L490.5 86.5L504 81" strokeWidth="7"/>
          </mask>
        </g>
        <linearGradient id="paint0_linear_72_45" x1="306.5" y1="48.6779" x2="306.5" y2="145.678" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D18692"/>
          <stop offset="0.489583" stopColor="#DCA9B0"/>
          <stop offset="1" stopColor="#D18692"/>
        </linearGradient>
        <linearGradient id="paint1_linear_72_45" x1="306.5" y1="48.7569" x2="306.5" y2="145.757" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D18692"/>
          <stop offset="0.489583" stopColor="#DCA9B0"/>
          <stop offset="1" stopColor="#D18692"/>
        </linearGradient>
        <linearGradient id="paint2_linear_72_45" x1="306.5" y1="48.7569" x2="306.5" y2="145.757" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D18692"/>
          <stop offset="0.489583" stopColor="#DCA9B0"/>
          <stop offset="1" stopColor="#D18692"/>
        </linearGradient>
        <linearGradient id="paint3_linear_72_45" x1="306.5" y1="48.7569" x2="306.5" y2="145.757" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D18692"/>
          <stop offset="0.489583" stopColor="#DCA9B0"/>
          <stop offset="1" stopColor="#D18692"/>
        </linearGradient>
        <linearGradient id="paint4_linear_72_45" x1="306.5" y1="48.6614" x2="306.5" y2="145.661" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D18692"/>
          <stop offset="0.489583" stopColor="#DCA9B0"/>
          <stop offset="1" stopColor="#D18692"/>
        </linearGradient>
        <linearGradient id="paint5_linear_72_45" x1="306.5" y1="48.8394" x2="306.5" y2="145.839" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D18692"/>
          <stop offset="0.489583" stopColor="#DCA9B0"/>
          <stop offset="1" stopColor="#D18692"/>
        </linearGradient>
        <linearGradient id="paint6_linear_72_45" x1="306.5" y1="49.4819" x2="306.5" y2="146.482" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D18692"/>
          <stop offset="0.489583" stopColor="#DCA9B0"/>
          <stop offset="1" stopColor="#D18692"/>
        </linearGradient>
      </defs>
      <path mask='url(#mask-why-u)' d="M502.702 79.8112C503.269 80.3782 503.553 81.3703 503.269 81.9373C502.986 82.9294 501.852 83.3546 501.427 82.7877C498.875 79.8112 473.363 97.6701 470.244 100.221C465.425 104.048 461.74 107.308 456.779 111.985L453.945 114.678L451.677 119.214C450.401 121.765 448.559 125.734 447.425 128.144C440.196 143.026 432.968 156.774 429.991 161.877C425.456 169.389 422.337 172.224 420.495 170.381C419.928 169.672 419.786 168.822 419.928 166.554C420.211 161.31 422.763 154.081 427.44 146.002C430.133 141.325 435.235 133.671 438.921 129.136C441.472 126.159 443.74 123.466 445.582 121.34L447.283 119.356L449.693 114.395C451.11 111.702 453.661 106.316 455.646 102.347C460.606 92.2841 462.024 89.1659 463.725 84.6303C464.858 81.6538 465.425 78.5356 465.142 77.26C464.858 76.1261 464.433 75.8426 462.874 75.8426C461.74 75.8426 461.173 75.9843 459.898 76.4095C456.071 77.9686 447.85 83.7799 441.047 89.5911C434.952 94.8353 432.117 96.6779 429.991 96.8196C428.716 96.9614 428.149 96.6779 427.156 95.6858C425.597 93.8432 425.456 89.5911 427.015 82.9294C427.865 79.386 428.574 77.1182 429.141 76.4095C430.133 75.1339 431.55 74.9922 432.401 76.1261C433.251 76.9765 433.109 77.8269 431.55 82.2207C430.133 86.3311 428.999 90.8667 428.999 92.2841C428.999 93.5597 429.282 94.4101 429.849 94.6936C431.125 95.2605 434.102 93.418 439.771 88.7406C447.141 82.5042 452.953 78.3938 458.055 75.8426C460.181 74.7087 461.74 74.1417 463.158 74C464.717 74 465.567 74.1417 466.276 74.8504C467.41 75.7008 467.693 76.693 467.835 78.3938C468.118 83.2129 465.142 91.5754 457.063 108.159C456.496 109.292 456.071 110.285 456.071 110.426C456.071 110.426 457.205 109.434 458.48 108.3C468.685 98.9457 483.284 88.032 495.757 81.9373C501.285 79.1025 501.852 78.9608 502.702 79.8112ZM444.165 126.017L444.874 124.6L444.023 125.592C441.047 128.852 436.369 135.089 433.251 139.766C429.991 144.727 425.739 152.522 424.038 156.774C422.196 161.593 421.203 166.979 421.77 167.972C421.912 168.255 423.613 166.554 425.03 164.286C426.164 162.586 427.582 160.318 429.282 157.341C431.267 153.798 438.495 138.632 444.165 126.017Z" fill="url(#paint0_linear_72_45)"/>
      <path mask='url(#mask-why-m)' fillRule="evenodd" clipRule="evenodd" d="M333.064 69.9686C333.064 67.8426 331.222 66 329.237 66L329.096 67.5591C329.804 67.5591 330.229 67.8426 330.229 68.5513C330.229 70.5161 324.115 83.1811 322.068 87.4203L322.009 87.544C320.166 91.3709 320.591 93.0717 321.867 93.7804C323.965 94.8631 327.419 90.2926 331.474 84.9269C335.914 79.0532 341.074 72.2264 345.962 70.819C347.096 70.5356 347.38 70.6773 347.38 71.5277C347.38 73.0868 346.246 75.6381 342.844 81.8745C342.696 82.1545 342.544 82.4421 342.39 82.7336C341.218 84.9509 339.927 87.3923 339.301 88.3944C338.787 89.5494 337.925 91.053 337.346 92.0635C337.286 92.1691 337.228 92.2692 337.175 92.3631C336.324 94.0639 335.757 95.623 335.757 96.8986C335.757 97.6073 336.182 98.1743 336.891 98.4578C338.308 99.0247 339.726 98.316 347.238 92.5048C347.874 92.0381 349.298 90.9489 351.004 89.6442C354.996 86.5907 360.532 82.3566 361.128 82.158C361.27 82.0163 361.27 82.2997 361.128 83.0084C360.986 83.5754 360.845 84.851 360.845 85.9849C360.703 87.6857 360.845 87.9692 361.27 88.8196C362.971 92.5048 366.798 92.7883 370.341 92.7883C375.018 92.7883 380.83 91.9379 391.46 89.5283C396.05 88.4412 400.743 87.4571 405.363 86.4881C406.164 86.3201 406.963 86.1525 407.76 85.9849C413.854 84.7093 422.784 83.2919 425.051 83.2919C426.044 83.2919 426.185 83.4336 426.327 83.7171C426.433 83.9293 426.579 84.0819 426.757 84.1601C427.055 84.2909 427.443 84.2137 427.886 83.8589C428.453 83.5754 428.453 83.4336 428.453 82.8667C428.362 82.1403 428.097 81.8211 427.322 81.76C426.887 81.7257 426.292 81.7726 425.477 81.8745C423.351 82.0163 416.547 83.1502 413.571 83.7171C412.321 83.9671 408.278 84.854 404.352 85.7153C401.601 86.319 398.906 86.9101 397.271 87.2605C390.751 88.6779 384.089 90.0953 377.286 90.804C375.727 91.0874 370.766 91.2292 369.207 91.0874C366.514 90.804 363.679 90.3788 363.679 87.1188C363.679 85.418 364.388 83.5754 366.514 80.032C367.79 77.9059 367.79 77.0555 366.939 76.0633C366.372 75.4964 366.089 75.3546 365.522 75.3546C364.388 75.3546 363.254 76.0633 362.687 76.9137C361.979 77.9059 359.002 80.3154 354.183 84.0006C353.066 84.8194 351.833 85.7555 350.769 86.5625C349.807 87.2921 348.985 87.9162 348.514 88.2527C347.889 88.7877 347.097 89.3789 346.418 89.8849C346.018 90.1832 345.658 90.452 345.395 90.6622C343.694 91.7961 341.427 93.0717 341.568 92.7883C341.568 92.7185 341.912 92.0652 342.446 91.0479C342.998 89.9981 343.753 88.5607 344.545 86.9771C348.514 79.1815 349.506 76.9137 350.214 74.2207C350.781 71.8112 350.64 70.3938 349.506 69.4017C348.372 68.2678 346.954 68.2678 344.403 69.4017C339.846 71.5512 334.663 78.343 330.405 83.9232C327.643 87.5417 325.271 90.6508 323.71 91.6544C328.387 83.0084 333.064 74.3625 333.064 69.9686Z" fill="url(#paint1_linear_72_45)"/>
      {/* <path mask='url(#mask-why-e)' fillRule="evenodd" clipRule="evenodd" d="M427.322 81.76C427.222 82.1566 427.119 82.5727 427.015 83.0084C426.923 83.4007 426.837 83.7845 426.757 84.1601C427.055 84.2909 427.443 84.2137 427.886 83.8589C428.453 83.5754 428.453 83.4336 428.453 82.8667C428.362 82.1403 428.097 81.8211 427.322 81.76Z" fill="url(#paint2_linear_72_45)"/> */}
      <path mask='url(#mask-why-e)' fillRule="evenodd" clipRule="evenodd" d="M302.834 78.7603C291.039 86.1172 278.526 93.9222 270.133 93.9222C265.881 93.9222 261.912 92.5048 261.912 87.544C261.912 86.6936 262.337 84.7093 262.904 84.0006C263.046 84.0478 263.204 84.1266 263.372 84.2106C263.707 84.3785 264.085 84.5675 264.463 84.5675C268.007 84.5675 275.235 77.0555 275.235 73.5121C275.235 71.8112 274.385 70.819 272.542 70.819C268.541 70.819 263.692 75.691 261.185 80.5012C260.839 81.1666 260.537 81.8308 260.288 82.4808C259.787 83.7893 259.503 85.0401 259.503 86.1266C259.503 92.93 264.322 94.9143 269.849 94.9143C278.991 94.9143 292.087 86.8795 304.084 79.519C314.223 73.2982 323.577 67.5591 329.095 67.5591L329.237 66C323.292 66 313.348 72.2021 302.834 78.7603ZM264.463 81.3076C266.448 78.3311 268.574 75.4964 271.834 73.7955C270.558 76.3468 268.149 79.3233 265.597 80.7406L264.463 81.3076Z" fill="url(#paint3_linear_72_45)"/>
      <path mask='url(#mask-why-c)' fillRule="evenodd" clipRule="evenodd" d="M175.402 89.2911C174.976 92.8345 176.394 94.9606 179.087 95.5275C179.937 95.6693 182.063 95.5275 183.481 95.1023C184.189 94.9606 185.748 94.2519 187.166 93.5432C189.292 92.4093 190.993 91.2754 203.182 83.0547C204.092 82.4655 204.922 81.9169 205.609 81.4622C206.741 80.7137 207.488 80.2199 207.576 80.2199C207.576 80.2908 207.54 80.5034 207.487 80.8223C207.434 81.1412 207.363 81.5664 207.292 82.0625C207.009 83.1964 206.867 84.6138 206.867 86.0311C206.867 88.1572 206.867 88.2989 207.434 89.4328C208.71 92.1258 210.978 92.8345 213.671 92.9763C218.915 93.118 224.868 91.8424 242.585 86.7398C253.838 83.5247 257.323 82.5752 260.288 82.3853C260.721 82.3575 261.144 82.346 261.578 82.346C263.562 82.346 263.845 82.2042 264.129 81.9208C264.412 81.4956 264.412 81.0703 263.987 80.6451C263.562 80.2199 263.42 80.2199 262.145 80.2199C261.929 80.2507 261.607 80.3131 261.185 80.4057C257.718 81.166 247.506 83.9566 234.364 87.8737C226.994 90.1415 223.734 90.9919 220.19 91.5589C214.663 92.551 211.119 91.8424 209.985 89.7163C209.135 88.1572 209.702 85.4642 211.261 81.779C212.395 79.2278 212.537 78.3773 211.686 77.3852C211.261 76.96 211.119 76.8182 209.985 76.8182C209.277 76.6765 208.568 76.8182 208.143 76.96C207.859 77.1017 206.159 78.3773 204.458 79.653C193.26 88.8659 187.591 92.6928 183.197 93.8267C181.496 94.2519 179.229 94.6771 179.087 92.2676C178.836 89.5113 180.259 86.4105 181.76 83.1393C182.806 80.8592 183.891 78.4963 184.473 76.1096C185.89 69.7314 176.677 69.7314 172.992 70.1566L170.299 72.1409C178.662 70.8653 180.362 71.8574 180.362 74.6922C180.362 77.0077 179.101 79.7855 177.838 82.568C176.782 84.8951 175.724 87.2254 175.402 89.2911Z" fill="url(#paint4_linear_72_45)"/>
      <path mask='url(#mask-why-o)' fillRule="evenodd" clipRule="evenodd" d="M141.101 74.5867C150.881 74.445 160.661 73.7363 170.299 72.3189L172.992 70.3346C171.133 70.5383 169.288 70.7466 167.454 70.9537C159.076 71.8994 150.916 72.8205 142.661 73.1693C139.884 73.2651 139.113 73.3608 138.729 73.0198C138.545 72.856 138.451 72.5912 138.267 72.1772C137.558 70.7598 135.715 69.059 134.298 68.492C130.046 66.9329 124.66 69.3424 126.361 72.0354C126.786 72.7441 128.629 73.5946 130.471 74.0198L132.03 74.3032L131.463 74.5867C129.337 75.4371 126.077 81.1066 124.235 86.7761C123.243 89.7526 122.817 91.7369 122.959 94.1464C123.101 96.6977 123.809 98.115 125.227 98.5402C130.329 100.099 139.401 85.7839 139.117 76.571V74.5867H141.101ZM133.589 73.1693C130.755 72.8859 127.778 71.8937 127.778 71.185C127.778 70.7598 128.487 70.3346 129.479 70.1929C130.613 70.0511 132.314 70.1929 133.589 70.7598C134.298 71.0433 136.424 72.8859 136.424 73.1693C136.424 73.3111 136.141 73.3111 133.589 73.1693ZM137.416 75.2954C138.408 78.2719 137.558 81.957 135.148 86.9178C134.015 89.1856 129.479 97.2646 126.361 97.2646C124.518 97.2646 124.943 93.296 127.069 88.1935C129.054 84.0831 132.172 79.264 133.022 79.264C133.589 79.264 134.723 78.1301 135.007 77.4215C135.29 76.4293 134.865 75.5789 134.156 74.8702L133.589 74.3032L134.581 74.445C135.148 74.5867 135.999 74.5867 136.424 74.5867C137.274 74.5867 137.274 74.5867 137.416 75.2954Z" fill="url(#paint5_linear_72_45)"/>
      <path mask='url(#mask-why-p)' d="M5.2496 129.855C4.21019 130.327 3.35978 130.232 2.69834 129.571C2.0369 129.004 1.70618 128.059 1.70618 126.736C1.70618 126.075 2.13139 125.224 2.98181 124.185C5.72205 121.256 10.4939 111.381 17.2972 94.562C26.7464 70.9392 31.4709 51.3323 31.4709 35.7412C31.4709 31.4891 30.9985 27.4732 30.0536 23.6936C29.1086 20.7644 28.3055 19.158 27.644 18.8745L27.5023 19.0163C27.5023 19.2053 27.455 19.3942 27.3606 19.5832C27.2661 19.7722 27.2188 19.9612 27.2188 20.1502C27.0298 20.7171 26.7936 21.0006 26.5101 21.0006C26.1322 21.0006 25.8959 20.9533 25.8015 20.8589C24.951 20.4809 24.5258 19.347 24.5258 17.4572C24.5258 16.1343 24.8565 15.1421 25.518 14.4807C26.0849 14.1027 26.5101 13.9137 26.7936 13.9137C27.455 13.9137 28.211 14.5752 29.0614 15.8981C31.9906 20.7171 33.4552 27.3315 33.4552 35.7412C33.4552 54.923 28.3055 77.7898 18.0059 104.342L17.5807 106.184C17.9587 106.184 20.6989 102.499 25.8015 95.129C28.5417 91.3493 33.6915 83.6011 41.2508 71.8841L43.5186 68.4825C43.8965 67.821 44.6525 66.6399 45.7864 64.939C46.8258 63.3327 47.5817 62.1043 48.0541 61.2539C63.0783 38.198 73.8503 22.9849 80.3702 15.6146C87.9295 7.20486 94.2131 3 99.2212 3C106.214 3 109.71 9.94511 109.71 23.8353C109.71 35.0798 106.639 49.537 100.497 67.2068C99.1739 71.1755 98.5125 73.4905 98.5125 74.1519V74.8606C98.5125 75.6165 98.418 76.656 98.229 77.9788C98.04 78.4513 97.7093 79.8214 97.2369 82.0892C96.0085 87.8532 93.0792 95.1762 88.4492 104.058C83.8191 113.035 79.5197 119.744 75.5511 124.185C74.3227 125.508 72.9526 126.169 71.4407 126.169C70.5903 126.169 69.8816 125.886 69.3147 125.319C68.6532 124.752 68.2753 124.091 68.1808 123.335C68.3698 122.295 68.7477 121.445 69.3147 120.783C78.0079 110.956 86.5593 95.129 94.9691 73.3015C103.379 51.474 107.584 34.4183 107.584 22.1345C107.584 16.654 106.828 12.4491 105.316 9.5199C103.71 6.49618 101.536 4.98432 98.796 4.98432C92.2761 4.98432 82.2127 14.5279 68.606 33.6152C65.7713 37.7728 59.9128 46.7495 51.0306 60.5452C45.3611 69.5219 36.668 82.7034 24.951 100.09C22.7777 103.302 19.8013 107.507 16.0216 112.704C14.6987 114.311 13.4703 116.39 12.3364 118.941C9.50171 125.366 7.13943 129.004 5.2496 129.855ZM95.2525 83.3648L95.3943 82.3727L95.1108 82.2309L94.6856 82.9396C94.6856 83.0341 94.5911 83.3176 94.4021 83.79C94.1186 84.357 93.7879 85.0657 93.41 85.9161C93.032 86.7665 92.7013 87.5224 92.4178 88.1839C91.5674 90.2627 90.4335 92.814 89.0161 95.8377C87.5987 98.9559 86.7483 100.798 86.4649 101.365C84.6695 104.956 83.7719 106.893 83.7719 107.177L83.9136 107.318C84.764 107.318 86.7956 103.869 90.0083 96.9716C93.221 90.0737 94.9691 85.5381 95.2525 83.3648Z" fill="url(#paint6_linear_72_45)"/>
    </svg>
  )
}

export default WhySvg