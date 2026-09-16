/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useId } from "react";
import { Graphic, type GraphicProps } from "../graphic";

export function BitbucketLogoGraphic(props: GraphicProps) {
  return (
    <Graphic {...props} viewBox="0 0 24 24">
      <g id="Name=Bitbucket">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.91673 3.8999C3.35046 3.8999 2.91969 4.39915 3.01266 4.94768L5.4535 19.3477C5.52707 19.7817 5.90947 20.0999 6.35756 20.0999H17.6392C18.0872 20.0999 18.4696 19.7818 18.5432 19.3479L20.9873 4.94787C21.0804 4.39929 20.6496 3.8999 20.0833 3.8999H3.91673ZM4.9984 5.6999L7.13413 18.2999H16.8628L18.2681 10.0199H15.913L15.0766 15.0218C15.0035 15.4593 14.6237 15.7799 14.1787 15.7799H9.82002C9.37496 15.7799 8.99515 15.4592 8.92207 15.0216L7.96258 9.2762C7.87023 8.72324 8.29809 8.21995 8.86052 8.21995H18.5736L19.0014 5.6999H4.9984ZM9.93486 10.0345L10.5913 13.9654H13.4076L14.0649 10.0345H9.93486Z"
          fill="currentColor"
        />
      </g>
    </Graphic>
  );
}

export function BitbucketLogoGraphicColor(props: GraphicProps) {
  const gradientId = `bitbucket-color-${useId().replace(/:/g, "")}`;

  return (
    <Graphic {...props} viewBox="0 0 24 24">
      <>
        <g id="Name=Bitbucket_color">
          <g id="Vector">
            <path
              d="M3.58438 3.90055C3.43104 3.899 3.28335 3.95842 3.17377 4.06574C3.0642 4.17305 3.0017 4.3195 3 4.47289C2.99998 4.50626 3.00256 4.53959 3.00771 4.57256L5.45581 19.4361C5.48633 19.618 5.57994 19.7833 5.7202 19.903C5.86046 20.0227 6.0384 20.0892 6.22277 20.0907H17.9676C18.1061 20.0926 18.2406 20.0446 18.3468 19.9557C18.453 19.8667 18.5237 19.7426 18.5462 19.6059L20.9924 4.57192C21.0171 4.42104 20.9812 4.2665 20.8924 4.14203C20.8036 4.01756 20.6692 3.93329 20.5186 3.90762C20.4873 3.90272 20.4557 3.90014 20.424 3.8999L3.58438 3.90055ZM13.893 14.6458H10.1444L9.12924 9.34422H14.8014L13.893 14.6458Z"
              fill="#2684FF"
            />
            <path
              d="M20.2138 9.34376L14.8014 9.34422L13.893 14.6458H10.1444L5.7181 19.907C5.85758 20.0301 6.03679 20.0986 6.22276 20.0999H17.9708C18.1093 20.1018 18.2439 20.0538 18.35 19.9649C18.4562 19.8759 18.5269 19.7518 18.5494 19.615L20.2138 9.34376Z"
              fill={`url(#${gradientId})`}
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id={gradientId}
            x1="21.2071"
            y1="10.629"
            x2="12.2621"
            y2="17.6098"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.18" stopColor="#0052CC" />
            <stop offset="1" stopColor="#2684FF" />
          </linearGradient>
        </defs>
      </>
    </Graphic>
  );
}
