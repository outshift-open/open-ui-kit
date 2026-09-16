/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphic, type GraphicProps } from "../graphic";

export function AzureDevopsLogoGraphic(props: GraphicProps) {
  return (
    <Graphic {...props} viewBox="0 0 24 24">
      <g id="Name=Azure_devops">
        <path
          id="Vector"
          d="M22 5.74571V17.9057L17 22L9.25 19.1786V21.9743L4.86286 16.2457L17.65 17.2429V6.29429L22 5.74571ZM17.7371 6.35714L10.5629 2V4.85857L3.97571 6.79429L2 9.32857V15.0843L4.82571 16.3314V8.95571L17.7371 6.35714Z"
          fill="currentColor"
        />
      </g>
    </Graphic>
  );
}

export function AzureDevopsLogoGraphicColor(props: GraphicProps) {
  return (
    <Graphic {...props} viewBox="0 0 24 24">
      <g id="Name=Azure_devops_color">
        <path
          id="Vector"
          d="M22 5.74571V17.9057L17 22L9.25 19.1786V21.9743L4.86286 16.2457L17.65 17.2429V6.29429L22 5.74571ZM17.7371 6.35714L10.5629 2V4.85857L3.97571 6.79429L2 9.32857V15.0843L4.82571 16.3314V8.95571L17.7371 6.35714Z"
          fill="#0089D6"
        />
      </g>
    </Graphic>
  );
}
