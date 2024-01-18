/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Lesson } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LessonUpdateFormInputValues = {
    title?: string;
    content?: string;
    youtubeEmbedId?: string;
    chapter?: number;
    lessonNumber?: number;
    description?: string;
};
export declare type LessonUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    youtubeEmbedId?: ValidationFunction<string>;
    chapter?: ValidationFunction<number>;
    lessonNumber?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LessonUpdateFormOverridesProps = {
    LessonUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    youtubeEmbedId?: PrimitiveOverrideProps<TextFieldProps>;
    chapter?: PrimitiveOverrideProps<TextFieldProps>;
    lessonNumber?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LessonUpdateFormProps = React.PropsWithChildren<{
    overrides?: LessonUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    lesson?: Lesson;
    onSubmit?: (fields: LessonUpdateFormInputValues) => LessonUpdateFormInputValues;
    onSuccess?: (fields: LessonUpdateFormInputValues) => void;
    onError?: (fields: LessonUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LessonUpdateFormInputValues) => LessonUpdateFormInputValues;
    onValidate?: LessonUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LessonUpdateForm(props: LessonUpdateFormProps): React.ReactElement;
