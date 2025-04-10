import React from "react";

export const UtilityIcons24 = React.memo(({ name, size, viewBox }) => {
  const icons = {
    plusicon: (
      <path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path>
    ),
    POSTS: (
      <>
        <rect
          fill="none"
          height="18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          width="18"
          x="3"
          y="3"
        ></rect>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke-width="2"
          x1="9.015"
          x2="9.015"
          y1="3"
          y2="21"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="14.985"
          x2="14.985"
          y1="3"
          y2="21"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="21"
          x2="3"
          y1="9.015"
          y2="9.015"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="21"
          x2="3"
          y1="14.985"
          y2="14.985"
        ></line>
      </>
    ),
    SAVED: (
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    ),
    TAGGED: (
      <>
        <path
          d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <path
          d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <circle
          cx="12.072"
          cy="11.075"
          fill="none"
          r="3.556"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></circle>
      </>
    ),
    more: (
      <>
        <circle cx="12" cy="12" r="1.5"></circle>
        <circle cx="6" cy="12" r="1.5"></circle>
        <circle cx="18" cy="12" r="1.5"></circle>
      </>
    ),
    profile: (
      <>
        <circle
          cx="13"
          cy="6.25"
          r="4"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="M6.26678 23.95H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 21.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z"
          stroke="currentColor"
          strokeWidth="2.2"
        />
      </>
    ),
    like: (
      <>
        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
      </>
    ),
    comment: (
      <>
        <path
          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
      </>
    ),
    share: (
      <>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
          x1="22"
          x2="9.218"
          y1="3"
          y2="10.083"
        ></line>
        <polygon
          fill="none"
          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
        ></polygon>
      </>
    ),
    loader: (
      <>
        <rect
          className="x1i210e2"
          height="6"
          opacity="0"
          rx="3"
          ry="3"
          transform="rotate(-90 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
        <rect
          className="x1i210e2"
          height="6"
          opacity="0.08333333333333333"
          rx="3"
          ry="3"
          transform="rotate(-60 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
        <rect
          className="x1i210e2"
          height="6"
          opacity="0.16666666666666666"
          rx="3"
          ry="3"
          transform="rotate(-30 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
        <rect
          className="x1i210e2"
          height="6"
          opacity="0.25"
          rx="3"
          ry="3"
          transform="rotate(0 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
        <rect
          className="x1i210e2"
          height="6"
          opacity="0.3333333333333333"
          rx="3"
          ry="3"
          transform="rotate(30 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
        <rect
          className="x1i210e2"
          height="6"
          opacity="0.4166666666666667"
          rx="3"
          ry="3"
          transform="rotate(60 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
        <rect
          className="x1i210e2"
          height="6"
          opacity="0.5"
          rx="3"
          ry="3"
          transform="rotate(90 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
        <rect
          className="x1i210e2"
          height="6"
          opacity="0.5833333333333334"
          rx="3"
          ry="3"
          transform="rotate(120 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
        <rect
          class="x1i210e2"
          height="6"
          opacity="0.6666666666666666"
          rx="3"
          ry="3"
          transform="rotate(150 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
        <rect
          className="x1i210e2"
          height="6"
          opacity="0.75"
          rx="3"
          ry="3"
          transform="rotate(180 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
        <rect
          className="x1i210e2"
          height="6"
          opacity="0.8333333333333334"
          rx="3"
          ry="3"
          transform="rotate(210 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
        <rect
          className="x1i210e2"
          height="6"
          opacity="0.9166666666666666"
          rx="3"
          ry="3"
          transform="rotate(240 50 50)"
          width="25"
          x="72"
          y="47"
        ></rect>
      </>
    ),
    follow: (
      <>
        <path
          d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="2"
        ></path>
        <path
          d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
          x1="5.001"
          x2="5.001"
          y1="7.998"
          y2="14.003"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
          x1="8.004"
          x2="2.003"
          y1="11"
          y2="11"
        ></line>
      </>
    ),
    cross: (
      <path d="m13.414 12 7.293-7.293a1 1 0 1 0-1.414-1.414L12 10.586 4.707 3.293a1 1 0 1 0-1.414 1.414L10.586 12l-7.293 7.293a1 1 0 1 0 1.414 1.414L12 13.414l7.293 7.293a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12z" />
    ),
    thread: (
      <path
        className="xcslo1z"
        d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
      />
    ),
    facebook: (
      <>
        <circle
          cx="12"
          cy="12"
          fill="none"
          r="11.25"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        ></circle>
        <path
          d="M16.671 15.469 17.203 12h-3.328V9.749a1.734 1.734 0 0 1 1.956-1.874h1.513V4.922a18.452 18.452 0 0 0-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.078v3.469h3.047v7.885a12.125 12.125 0 0 0 3.75 0V15.47Z"
          fill-rule="evenodd"
        ></path>
      </>
    ),
    twitter: (
      <path d="M16.04 3.5a4.304 4.304 0 0 1 3.145 1.362 8.645 8.645 0 0 0 2.736-1.046 4.324 4.324 0 0 1-1.895 2.383 8.618 8.618 0 0 0 2.475-.678 8.766 8.766 0 0 1-2.15 2.23c.01.185.013.37.013.557A12.175 12.175 0 0 1 8.105 20.567a12.2 12.2 0 0 1-6.604-1.935 8.792 8.792 0 0 0 1.027.06 8.647 8.647 0 0 0 5.351-1.845 4.314 4.314 0 0 1-4.024-2.992 4.313 4.313 0 0 0 1.945-.074 4.31 4.31 0 0 1-3.457-4.224c0-.02 0-.038.002-.055a4.267 4.267 0 0 0 1.951.538 4.312 4.312 0 0 1-1.334-5.75 12.233 12.233 0 0 0 8.881 4.502A4.315 4.315 0 0 1 16.04 3.5m6.46 2.02h.006M16.04 2a5.817 5.817 0 0 0-5.763 5.08 10.783 10.783 0 0 1-6.152-3.74 1.5 1.5 0 0 0-1.163-.552c-.039 0-.078.001-.117.004a1.5 1.5 0 0 0-1.18.742 5.821 5.821 0 0 0-.422 4.949 1.5 1.5 0 0 0-.394.904 2.26 2.26 0 0 0-.006.169 5.81 5.81 0 0 0 1.553 3.948 1.5 1.5 0 0 0 .03.808 5.796 5.796 0 0 0 1.801 2.679 7.233 7.233 0 0 1-1.699.2 7.338 7.338 0 0 1-.852-.05 1.5 1.5 0 0 0-.984 2.753 13.718 13.718 0 0 0 7.413 2.172 13.405 13.405 0 0 0 10.226-4.503 14.213 14.213 0 0 0 3.532-9.093 10.204 10.204 0 0 0 1.846-2.06 1.5 1.5 0 0 0-.362-2.132l.002-.006a1.5 1.5 0 0 0-2.193-1.748 7.15 7.15 0 0 1-1.56.69A5.838 5.838 0 0 0 16.04 2Z"></path>
    ),
    email: (
      <>
        <rect
          fill="none"
          height="17.273"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          width="20"
          x="2"
          y="3.364"
        ></rect>
        <polyline
          fill="none"
          points="2 7.155 12.002 13.81 22 7.157"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></polyline>
      </>
    ),
    qr: (
      <>
        <path
          d="M.75 16.097v3.568a3.585 3.585 0 0 0 3.585 3.585h3.568m0-22.5H4.335A3.585 3.585 0 0 0 .75 4.335v3.568m22.5 0V4.335A3.585 3.585 0 0 0 19.665.75h-3.568m0 22.5h3.568a3.585 3.585 0 0 0 3.585-3.585v-3.568"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        ></path>
        <path d="M19 17.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM17.5 16a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5Zm1.5-2.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm-4 4h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm-1-2h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5ZM18 4h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm.5 5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5ZM9 4H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm.5 5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5ZM8 6.5H7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5Zm0 9H7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm9-9h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5ZM9 13H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Zm.5 5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"></path>
      </>
    ),
    link: (
      <>
        <path
          d="m9.726 5.123 1.228-1.228a6.47 6.47 0 0 1 9.15 9.152l-1.227 1.227m-4.603 4.603-1.228 1.228a6.47 6.47 0 0 1-9.15-9.152l1.227-1.227"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="8.471"
          x2="15.529"
          y1="15.529"
          y2="8.471"
        ></line>
      </>
    ),
  };
  return (
    <svg
      aria-label={name}
      className="x1lliihq x1n2onr6 x10xgr34"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height={size || 24}
      role="img"
      viewBox={viewBox || "0 0 24 24"}
      width={size || 24}
    >
      <title>{name}</title>
      {icons[name] || null}
    </svg>
  );
});

export const Utilitity96 = React.memo(({ name, size }) => {
  const icons = {
    saved: (
      <>
        <circle
          cx="48"
          cy="48"
          fill="none"
          r="47"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke-width="2"
        ></circle>
        <path
          d="M66 68.685 49.006 51.657a1.42 1.42 0 0 0-2.012 0L30 68.685V27h36Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke-width="2"
        ></path>
      </>
    ),
    post: (
      <>
        <circle
          cx="48"
          cy="48"
          fill="none"
          r="47"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
        <ellipse
          cx="48.002"
          cy="49.524"
          fill="none"
          rx="10.444"
          ry="10.476"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2.095"
        ></ellipse>
        <path
          d="M63.994 69A8.02 8.02 0 0 0 72 60.968V39.456a8.023 8.023 0 0 0-8.01-8.035h-1.749a4.953 4.953 0 0 1-4.591-3.242C56.61 25.696 54.859 25 52.469 25h-8.983c-2.39 0-4.141.695-5.181 3.178a4.954 4.954 0 0 1-4.592 3.242H32.01a8.024 8.024 0 0 0-8.012 8.035v21.512A8.02 8.02 0 0 0 32.007 69Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </>
    ),
    tag: (
      <>
        <circle
          cx="48"
          cy="48"
          fill="none"
          r="47"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></circle>
        <path
          d="M56.826 44.119a8.824 8.824 0 1 1-8.823-8.825 8.823 8.823 0 0 1 8.823 8.825Z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></path>
        <path
          d="M63.69 67.999a9.038 9.038 0 0 0-9.25-8.998H41.56A9.038 9.038 0 0 0 32.31 68"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
        <path
          d="M48 20.215c-2.94 0-7.125 8.76-11.51 8.785h-4.705A8.785 8.785 0 0 0 23 37.784v22.428a8.785 8.785 0 0 0 8.785 8.785h32.43A8.785 8.785 0 0 0 73 60.212V37.784A8.785 8.785 0 0 0 64.215 29h-4.704c-4.385-.026-8.57-8.785-11.511-8.785Z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></path>
      </>
    ),
  };
  return (
    <svg
      aria-label="Save"
      class="x1lliihq x1n2onr6 x5n08af"
      fill="currentColor"
      height={size}
      role="img"
      viewBox="0 0 96 96"
      width={size}
    >
      <title>Save</title>
      {icons[name] || null}
    </svg>
  );
});

export const Liked = () => {
  return (
    <svg
      aria-label="Unlike"
      class="x1lliihq x1n2onr6 xxk16z8"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 48 48"
      width="24"
    >
      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
    </svg>
  );
};
