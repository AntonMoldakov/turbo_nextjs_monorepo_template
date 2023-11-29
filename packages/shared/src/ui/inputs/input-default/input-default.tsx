import { forwardRef } from "react";

import type { BaseInputProps } from "../base-input/base-input";
import { BaseInput } from "../base-input/base-input";

export const InputDefault = forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    return <BaseInput {...props} ref={ref} />;
  }
);

InputDefault.displayName = `InputDefault`;
