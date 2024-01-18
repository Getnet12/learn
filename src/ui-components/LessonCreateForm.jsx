/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Lesson } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function LessonCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    content: "",
    youtubeEmbedId: "",
    chapter: "",
    lessonNumber: "",
    description: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);
  const [youtubeEmbedId, setYoutubeEmbedId] = React.useState(
    initialValues.youtubeEmbedId
  );
  const [chapter, setChapter] = React.useState(initialValues.chapter);
  const [lessonNumber, setLessonNumber] = React.useState(
    initialValues.lessonNumber
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setContent(initialValues.content);
    setYoutubeEmbedId(initialValues.youtubeEmbedId);
    setChapter(initialValues.chapter);
    setLessonNumber(initialValues.lessonNumber);
    setDescription(initialValues.description);
    setErrors({});
  };
  const validations = {
    title: [{ type: "Required" }],
    content: [{ type: "Required" }],
    youtubeEmbedId: [],
    chapter: [{ type: "Required" }],
    lessonNumber: [{ type: "Required" }],
    description: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          content,
          youtubeEmbedId,
          chapter,
          lessonNumber,
          description,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Lesson(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "LessonCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              content,
              youtubeEmbedId,
              chapter,
              lessonNumber,
              description,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={true}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content: value,
              youtubeEmbedId,
              chapter,
              lessonNumber,
              description,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Youtube embed id"
        isRequired={false}
        isReadOnly={false}
        value={youtubeEmbedId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content,
              youtubeEmbedId: value,
              chapter,
              lessonNumber,
              description,
            };
            const result = onChange(modelFields);
            value = result?.youtubeEmbedId ?? value;
          }
          if (errors.youtubeEmbedId?.hasError) {
            runValidationTasks("youtubeEmbedId", value);
          }
          setYoutubeEmbedId(value);
        }}
        onBlur={() => runValidationTasks("youtubeEmbedId", youtubeEmbedId)}
        errorMessage={errors.youtubeEmbedId?.errorMessage}
        hasError={errors.youtubeEmbedId?.hasError}
        {...getOverrideProps(overrides, "youtubeEmbedId")}
      ></TextField>
      <TextField
        label="Chapter"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={chapter}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              content,
              youtubeEmbedId,
              chapter: value,
              lessonNumber,
              description,
            };
            const result = onChange(modelFields);
            value = result?.chapter ?? value;
          }
          if (errors.chapter?.hasError) {
            runValidationTasks("chapter", value);
          }
          setChapter(value);
        }}
        onBlur={() => runValidationTasks("chapter", chapter)}
        errorMessage={errors.chapter?.errorMessage}
        hasError={errors.chapter?.hasError}
        {...getOverrideProps(overrides, "chapter")}
      ></TextField>
      <TextField
        label="Lesson number"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={lessonNumber}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              content,
              youtubeEmbedId,
              chapter,
              lessonNumber: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.lessonNumber ?? value;
          }
          if (errors.lessonNumber?.hasError) {
            runValidationTasks("lessonNumber", value);
          }
          setLessonNumber(value);
        }}
        onBlur={() => runValidationTasks("lessonNumber", lessonNumber)}
        errorMessage={errors.lessonNumber?.errorMessage}
        hasError={errors.lessonNumber?.hasError}
        {...getOverrideProps(overrides, "lessonNumber")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content,
              youtubeEmbedId,
              chapter,
              lessonNumber,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
