/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ComponentPropsWithoutRef,
  ElementType,
  JSXElementConstructor,
} from "react";

export type PropsOf<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>,
> = JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>;

export interface AsProp<C extends ElementType> {
  as?: C;
}

export type ExtendableProps<ExtendedProps, OverrideProps> = OverrideProps &
  Omit<ExtendedProps, keyof OverrideProps>;

export type InheritableElementProps<
  C extends ElementType,
  Props,
> = ExtendableProps<PropsOf<C>, Props>;

export type PolymorphicComponentProps<
  C extends ElementType,
  Props,
> = InheritableElementProps<C, Props & AsProp<C>>;
