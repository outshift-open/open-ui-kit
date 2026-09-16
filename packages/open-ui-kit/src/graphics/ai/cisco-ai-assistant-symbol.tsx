/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useId } from "react";
import { Graphic, type GraphicProps } from "../graphic";

export function CiscoAiAssistantSymbolDefault(props: GraphicProps) {
  const instanceId = useId().replace(/:/g, "");
  const gradientId = (index: number) => `ai-default-${index}-${instanceId}`;

  return (
    <Graphic {...props} viewBox="0 0 32 32">
      <>
        <g id="Cisco AI Assistant Symbol">
          <g id="State=Default">
            <g id="Group 1000006255">
              <path
                id="Bottom Lens"
                d="M23.5 18C27.6421 18 31 14.6421 31 10.5C31 6.35786 27.6421 3 23.5 3C19.3579 3 16 6.35787 16 10.5C16 14.6421 19.3579 18 23.5 18Z"
                fill={`url(#${gradientId(0)})`}
              />
              <path
                id="Ring"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 8.42292C11.8118 8.42292 8.41667 11.8171 8.41667 16.0041C8.41667 20.191 11.8118 23.5852 16 23.5852C20.1882 23.5852 23.5833 20.191 23.5833 16.0041C23.5833 11.8171 20.1882 8.42292 16 8.42292ZM3 16.0041C3 8.82644 8.8203 3.00781 16 3.00781C23.1797 3.00781 29 8.82644 29 16.0041C29 23.1817 23.1797 29.0003 16 29.0003C8.8203 29.0003 3 23.1817 3 16.0041Z"
                fill={`url(#${gradientId(1)})`}
              />
              <g id="Inner Lens">
                <path
                  id="Intersect"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.9932 15.605C27.6241 17.0737 25.6723 17.9921 23.5061 17.9921C23.4435 17.9921 23.3811 17.9913 23.3188 17.9898C23.4916 17.3544 23.5838 16.6859 23.5838 15.9959C23.5838 11.9072 20.3469 8.57444 16.2959 8.4203C16.8915 6.34348 18.3602 4.63575 20.2794 3.71973C25.2391 5.44741 28.8305 10.0959 28.9932 15.605Z"
                  fill={`url(#${gradientId(2)})`}
                />
              </g>
              <path
                id="Top Lens"
                d="M23.4961 18C27.6382 18 30.9961 14.6421 30.9961 10.5C30.9961 6.35786 27.6382 3 23.4961 3C19.354 3 15.9961 6.35787 15.9961 10.5C15.9961 14.6421 19.354 18 23.4961 18Z"
                fill={`url(#${gradientId(3)})`}
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id={gradientId(0)}
            x1="16.2974"
            y1="3"
            x2="28.579"
            y2="15.2815"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0087EA" />
            <stop offset="1" stopColor="#63FFF7" />
          </linearGradient>
          <linearGradient
            id={gradientId(1)}
            x1="29"
            y1="3.00781"
            x2="3.00748"
            y2="29.0078"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0051AF" />
            <stop offset="0.666238" stopColor="#0087EA" />
            <stop offset="1" stopColor="#00BCEB" />
          </linearGradient>
          <linearGradient
            id={gradientId(2)}
            x1="20.9454"
            y1="7.98988"
            x2="27.8983"
            y2="16.0316"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74BF4B" stopOpacity="0" />
            <stop offset="1" stopColor="#74BF4B" />
          </linearGradient>
          <radialGradient
            id={gradientId(3)}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(30.9961 18) rotate(-135) scale(21.2132 21.2042)"
          >
            <stop stopColor="#00BCEB" stopOpacity="0" />
            <stop offset="0.666962" stopColor="#00BCEB" stopOpacity="0" />
            <stop offset="1" stopColor="#00BCEB" />
          </radialGradient>
        </defs>
      </>
    </Graphic>
  );
}

export function CiscoAiAssistantSymbolResponding(props: GraphicProps) {
  const instanceId = useId().replace(/:/g, "");
  const gradientId = (index: number) => `ai-responding-${index}-${instanceId}`;

  return (
    <Graphic {...props} viewBox="0 0 32 32">
      <>
        <g id="Cisco AI Assistant Symbol">
          <g id="State=Responding">
            <circle
              id="Right Ellipse"
              cx="21.5"
              cy="15.5"
              r="7.5"
              transform="rotate(-180 21.5 15.5)"
              fill={`url(#${gradientId(0)})`}
            />
            <circle
              id="Left Ellipse"
              cx="7"
              cy="16"
              r="4"
              fill={`url(#${gradientId(1)})`}
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id={gradientId(0)}
            x1="29"
            y1="8"
            x2="14"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0051AF" />
            <stop offset="0.666238" stopColor="#0087EA" />
            <stop offset="1" stopColor="#00BCEB" />
          </linearGradient>
          <linearGradient
            id={gradientId(1)}
            x1="3.15864"
            y1="12"
            x2="9.70878"
            y2="18.5501"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0087EA" />
            <stop offset="1" stopColor="#63FFF7" />
          </linearGradient>
        </defs>
      </>
    </Graphic>
  );
}

export function CiscoAiAssistantSymbolProcessingLoop(props: GraphicProps) {
  const instanceId = useId().replace(/:/g, "");
  const gradientId = (index: number) =>
    `ai-processing-loop-${index}-${instanceId}`;

  return (
    <Graphic {...props} viewBox="0 0 32 32">
      <>
        <g id="Cisco AI Assistant Symbol">
          <g id="State=Processing-loop">
            <g id="Mark">
              <g id="Group 427320231">
                <g id="Group 427319971">
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 8.41511C11.8118 8.41511 8.41667 11.8093 8.41667 15.9963C8.41667 20.1832 11.8118 23.5774 16 23.5774C20.1882 23.5774 23.5833 20.1832 23.5833 15.9963C23.5833 11.8093 20.1882 8.41511 16 8.41511ZM3 15.9963C3 8.81862 8.8203 3 16 3C23.1797 3 29 8.81862 29 15.9963C29 23.1739 23.1797 28.9925 16 28.9925C8.8203 28.9925 3 23.1739 3 15.9963Z"
                    fill={`url(#${gradientId(0)})`}
                  />
                </g>
              </g>
            </g>
            <path
              id="Ellipse 1"
              d="M16 5.74219C10.3348 5.74219 5.74231 10.3347 5.74231 15.9998C5.74231 21.665 10.3348 26.2575 16 26.2575C19.728 26.2575 22.9916 24.2687 24.7875 21.2941"
              stroke={`url(#${gradientId(1)})`}
              strokeWidth="8.19239"
              strokeLinecap="round"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id={gradientId(0)}
            x1="29"
            y1="3"
            x2="3.00748"
            y2="29"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0051AF" />
            <stop offset="0.666238" stopColor="#0087EA" />
            <stop offset="1" stopColor="#00BCEB" />
          </linearGradient>
          <radialGradient
            id={gradientId(1)}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(15.2649 15.9998) rotate(90) scale(10.2576 9.5226)"
          >
            <stop stopColor="#60FBF7" />
            <stop offset="1" stopColor="#12AFED" />
          </radialGradient>
        </defs>
      </>
    </Graphic>
  );
}

export function CiscoAiAssistantSymbolProcessingStart(props: GraphicProps) {
  const instanceId = useId().replace(/:/g, "");
  const gradientId = (index: number) =>
    `ai-processing-start-${index}-${instanceId}`;

  return (
    <Graphic {...props} viewBox="0 0 32 32">
      <>
        <g id="Cisco AI Assistant Symbol">
          <g id="State=Processing-start">
            <path
              id="Vector"
              d="M25.5885 21.2665C28.575 21.2665 30.9961 18.8454 30.9961 15.8588C30.9961 12.8723 28.575 10.4512 25.5885 10.4512C22.6019 10.4512 20.1808 12.8723 20.1808 15.8588C20.1808 18.8454 22.6019 21.2665 25.5885 21.2665Z"
              fill={`url(#${gradientId(0)})`}
            />
            <path
              id="Vector (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 8.41902C11.8118 8.41902 8.41667 11.8132 8.41667 16.0002C8.41667 20.1871 11.8118 23.5813 16 23.5813C20.1882 23.5813 23.5833 20.1871 23.5833 16.0002C23.5833 11.8132 20.1882 8.41902 16 8.41902ZM3 16.0002C3 8.82253 8.8203 3.00391 16 3.00391C23.1797 3.00391 29 8.82253 29 16.0002C29 23.1778 23.1797 28.9964 16 28.9964C8.8203 28.9964 3 23.1778 3 16.0002Z"
              fill={`url(#${gradientId(1)})`}
            />
            <path
              id="Intersect"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.3666 20.1271C23.14 18.9386 23.5894 17.5199 23.5894 15.9962C23.5894 14.375 23.0806 12.8725 22.214 11.6399C23.1358 10.8963 24.3083 10.4512 25.5848 10.4512C26.464 10.4512 27.2939 10.6623 28.0265 11.0367C28.6578 12.565 29.0061 14.24 29.0061 15.9962C29.0061 17.5873 28.7202 19.1115 28.1971 20.5205C27.4238 20.9516 26.533 21.1972 25.5848 21.1972C24.3777 21.1972 23.2636 20.7991 22.3666 20.1271Z"
              fill={`url(#${gradientId(2)})`}
            />
            <path
              id="Vector_2"
              d="M25.5885 21.2742C28.5772 21.2742 31 18.8514 31 15.8627C31 12.874 28.5772 10.4512 25.5885 10.4512C22.5998 10.4512 20.177 12.874 20.177 15.8627C20.177 18.8514 22.5998 21.2742 25.5885 21.2742Z"
              fill={`url(#${gradientId(3)})`}
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id={gradientId(0)}
            x1="20.3952"
            y1="10.4512"
            x2="29.2505"
            y2="19.3064"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0087EA" />
            <stop offset="1" stopColor="#63FFF7" />
          </linearGradient>
          <linearGradient
            id={gradientId(1)}
            x1="29"
            y1="3.00391"
            x2="3.00748"
            y2="29.0039"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0051AF" />
            <stop offset="0.666238" stopColor="#0087EA" />
            <stop offset="1" stopColor="#00BCEB" />
          </linearGradient>
          <linearGradient
            id={gradientId(2)}
            x1="20.7558"
            y1="7.93408"
            x2="27.6352"
            y2="15.8908"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74BF4B" stopOpacity="0" />
            <stop offset="1" stopColor="#74BF4B" />
          </linearGradient>
          <radialGradient
            id={gradientId(3)}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(31 21.2742) rotate(-135) scale(15.3061 15.2996)"
          >
            <stop stopColor="#00BCEB" stopOpacity="0" />
            <stop offset="0.666962" stopColor="#00BCEB" stopOpacity="0" />
            <stop offset="1" stopColor="#00BCEB" />
          </radialGradient>
        </defs>
      </>
    </Graphic>
  );
}

export function CiscoAiAssistantSymbolProcessingEnd(props: GraphicProps) {
  const instanceId = useId().replace(/:/g, "");
  const gradientId = (index: number) =>
    `ai-processing-end-${index}-${instanceId}`;

  return (
    <Graphic {...props} viewBox="0 0 32 32">
      <>
        <g id="Cisco AI Assistant Symbol">
          <g id="State=Processing-end">
            <path
              id="Vector"
              d="M16 12.3357C19.1303 12.3357 21.6678 9.79811 21.6678 6.66784C21.6678 3.53757 19.1303 1 16 1C12.8697 1 10.3322 3.53758 10.3322 6.66784C10.3322 9.7981 12.8697 12.3357 16 12.3357Z"
              fill={`url(#${gradientId(0)})`}
            />
            <path
              id="Vector (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 8.41877C11.8118 8.41877 8.41667 11.813 8.41667 15.9999C8.41667 20.1869 11.8118 23.5811 16 23.5811C20.1882 23.5811 23.5833 20.1869 23.5833 15.9999C23.5833 11.813 20.1882 8.41877 16 8.41877ZM3 15.9999C3 8.82229 8.8203 3.00366 16 3.00366C23.1797 3.00366 29 8.82229 29 15.9999C29 23.1776 23.1797 28.9962 16 28.9962C8.8203 28.9962 3 23.1776 3 15.9999Z"
              fill={`url(#${gradientId(1)})`}
            />
            <path
              id="Vector_2"
              d="M16 12.3357C19.1303 12.3357 21.6678 9.79811 21.6678 6.66784C21.6678 3.53757 19.1303 1 16 1C12.8697 1 10.3322 3.53758 10.3322 6.66784C10.3322 9.79811 12.8697 12.3357 16 12.3357Z"
              fill={`url(#${gradientId(2)})`}
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id={gradientId(0)}
            x1="10.5569"
            y1="1"
            x2="19.8382"
            y2="10.2813"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0087EA" />
            <stop offset="1" stopColor="#63FFF7" />
          </linearGradient>
          <linearGradient
            id={gradientId(1)}
            x1="29"
            y1="3.00366"
            x2="3.00748"
            y2="29.0037"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0051AF" />
            <stop offset="0.666238" stopColor="#0087EA" />
            <stop offset="1" stopColor="#00BCEB" />
          </linearGradient>
          <radialGradient
            id={gradientId(2)}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(21.6678 12.3357) rotate(-135) scale(16.0311 16.0243)"
          >
            <stop stopColor="#00BCEB" stopOpacity="0" />
            <stop offset="0.666962" stopColor="#00BCEB" stopOpacity="0" />
            <stop offset="1" stopColor="#00BCEB" />
          </radialGradient>
        </defs>
      </>
    </Graphic>
  );
}
