/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphic, type GraphicProps } from "../graphic";

export function AzureLogoGraphic(props: GraphicProps) {
  return (
    <Graphic {...props} viewBox="0 0 24 24">
      <g id="Name=Microsoft Azure">
        <g id="Frame 4434">
          <path
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 17.535L7.18932 8.89266L13.25 4L6.67866 17.5483V17.535H2ZM15.9923 17.3761L11.11 11.7431L13.6513 4.96782L22 19.0001H6.50003L15.9923 17.3761Z"
            fill="currentColor"
          />
        </g>
      </g>
    </Graphic>
  );
}

export function AzureLogoGraphicColor(props: GraphicProps) {
  return (
    <Graphic {...props} viewBox="0 0 24 24">
      <g id="Name=Microsoft Azure_Colored">
        <g id="Frame 4435">
          <path
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 17.535L7.18933 8.89267L13.25 4L6.67866 17.5483V17.535H2ZM15.9924 17.3761L11.11 11.7431L13.6514 4.96777L22 19.0001H6.50003L15.9924 17.3761Z"
            fill="#0089D6"
          />
        </g>
      </g>
    </Graphic>
  );
}
