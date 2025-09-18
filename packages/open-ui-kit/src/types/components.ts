/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
