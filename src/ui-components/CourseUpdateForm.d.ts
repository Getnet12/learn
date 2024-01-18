/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Course } from "../models";
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
export declare type CourseUpdateFormInputValues = {
    title?: string;
    timeHours?: number;
    timeMinutes?: number;
    learningObjective?: string;
    description?: string;
    requirements?: string[];
    image?: string;
    skillLevel?: string;
    dateCreated?: string;
    isFeatured?: boolean;
    imageAltText?: string;
    trailerEmbedId?: string;
    courseUrlTitle?: string;
    published?: boolean;
};
export declare type CourseUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    timeHours?: ValidationFunction<number>;
    timeMinutes?: ValidationFunction<number>;
    learningObjective?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    requirements?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    skillLevel?: ValidationFunction<string>;
    dateCreated?: ValidationFunction<string>;
    isFeatured?: ValidationFunction<boolean>;
    imageAltText?: ValidationFunction<string>;
    trailerEmbedId?: ValidationFunction<string>;
    courseUrlTitle?: ValidationFunction<string>;
    published?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseUpdateFormOverridesProps = {
    CourseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    timeHours?: PrimitiveOverrideProps<TextFieldProps>;
    timeMinutes?: PrimitiveOverrideProps<TextFieldProps>;
    learningObjective?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    requirements?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    skillLevel?: PrimitiveOverrideProps<SelectFieldProps>;
    dateCreated?: PrimitiveOverrideProps<TextFieldProps>;
    isFeatured?: PrimitiveOverrideProps<SwitchFieldProps>;
    imageAltText?: PrimitiveOverrideProps<TextFieldProps>;
    trailerEmbedId?: PrimitiveOverrideProps<TextFieldProps>;
    courseUrlTitle?: PrimitiveOverrideProps<TextFieldProps>;
    published?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CourseUpdateFormProps = React.PropsWithChildren<{
    overrides?: CourseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    course?: Course;
    onSubmit?: (fields: CourseUpdateFormInputValues) => CourseUpdateFormInputValues;
    onSuccess?: (fields: CourseUpdateFormInputValues) => void;
    onError?: (fields: CourseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseUpdateFormInputValues) => CourseUpdateFormInputValues;
    onValidate?: CourseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CourseUpdateForm(props: CourseUpdateFormProps): React.ReactElement;
