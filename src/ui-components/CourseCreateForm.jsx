/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Course } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function CourseCreateForm(props) {
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
    timeHours: "",
    timeMinutes: "",
    learningObjective: "",
    description: "",
    requirements: [],
    image: "",
    skillLevel: "",
    dateCreated: "",
    isFeatured: false,
    imageAltText: "",
    trailerEmbedId: "",
    courseUrlTitle: "",
    published: false,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [timeHours, setTimeHours] = React.useState(initialValues.timeHours);
  const [timeMinutes, setTimeMinutes] = React.useState(
    initialValues.timeMinutes
  );
  const [learningObjective, setLearningObjective] = React.useState(
    initialValues.learningObjective
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [requirements, setRequirements] = React.useState(
    initialValues.requirements
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [skillLevel, setSkillLevel] = React.useState(initialValues.skillLevel);
  const [dateCreated, setDateCreated] = React.useState(
    initialValues.dateCreated
  );
  const [isFeatured, setIsFeatured] = React.useState(initialValues.isFeatured);
  const [imageAltText, setImageAltText] = React.useState(
    initialValues.imageAltText
  );
  const [trailerEmbedId, setTrailerEmbedId] = React.useState(
    initialValues.trailerEmbedId
  );
  const [courseUrlTitle, setCourseUrlTitle] = React.useState(
    initialValues.courseUrlTitle
  );
  const [published, setPublished] = React.useState(initialValues.published);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setTimeHours(initialValues.timeHours);
    setTimeMinutes(initialValues.timeMinutes);
    setLearningObjective(initialValues.learningObjective);
    setDescription(initialValues.description);
    setRequirements(initialValues.requirements);
    setCurrentRequirementsValue("");
    setImage(initialValues.image);
    setSkillLevel(initialValues.skillLevel);
    setDateCreated(initialValues.dateCreated);
    setIsFeatured(initialValues.isFeatured);
    setImageAltText(initialValues.imageAltText);
    setTrailerEmbedId(initialValues.trailerEmbedId);
    setCourseUrlTitle(initialValues.courseUrlTitle);
    setPublished(initialValues.published);
    setErrors({});
  };
  const [currentRequirementsValue, setCurrentRequirementsValue] =
    React.useState("");
  const requirementsRef = React.createRef();
  const validations = {
    title: [{ type: "Required" }],
    timeHours: [{ type: "Required" }],
    timeMinutes: [{ type: "Required" }],
    learningObjective: [{ type: "Required" }],
    description: [{ type: "Required" }],
    requirements: [{ type: "Required" }],
    image: [{ type: "Required" }],
    skillLevel: [{ type: "Required" }],
    dateCreated: [{ type: "Required" }],
    isFeatured: [{ type: "Required" }],
    imageAltText: [],
    trailerEmbedId: [],
    courseUrlTitle: [{ type: "Required" }],
    published: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          timeHours,
          timeMinutes,
          learningObjective,
          description,
          requirements,
          image,
          skillLevel,
          dateCreated,
          isFeatured,
          imageAltText,
          trailerEmbedId,
          courseUrlTitle,
          published,
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
          await DataStore.save(new Course(modelFields));
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
      {...getOverrideProps(overrides, "CourseCreateForm")}
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
              timeHours,
              timeMinutes,
              learningObjective,
              description,
              requirements,
              image,
              skillLevel,
              dateCreated,
              isFeatured,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle,
              published,
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
        label="Time hours"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={timeHours}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              timeHours: value,
              timeMinutes,
              learningObjective,
              description,
              requirements,
              image,
              skillLevel,
              dateCreated,
              isFeatured,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle,
              published,
            };
            const result = onChange(modelFields);
            value = result?.timeHours ?? value;
          }
          if (errors.timeHours?.hasError) {
            runValidationTasks("timeHours", value);
          }
          setTimeHours(value);
        }}
        onBlur={() => runValidationTasks("timeHours", timeHours)}
        errorMessage={errors.timeHours?.errorMessage}
        hasError={errors.timeHours?.hasError}
        {...getOverrideProps(overrides, "timeHours")}
      ></TextField>
      <TextField
        label="Time minutes"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={timeMinutes}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              timeHours,
              timeMinutes: value,
              learningObjective,
              description,
              requirements,
              image,
              skillLevel,
              dateCreated,
              isFeatured,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle,
              published,
            };
            const result = onChange(modelFields);
            value = result?.timeMinutes ?? value;
          }
          if (errors.timeMinutes?.hasError) {
            runValidationTasks("timeMinutes", value);
          }
          setTimeMinutes(value);
        }}
        onBlur={() => runValidationTasks("timeMinutes", timeMinutes)}
        errorMessage={errors.timeMinutes?.errorMessage}
        hasError={errors.timeMinutes?.hasError}
        {...getOverrideProps(overrides, "timeMinutes")}
      ></TextField>
      <TextField
        label="Learning objective"
        isRequired={true}
        isReadOnly={false}
        value={learningObjective}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              timeHours,
              timeMinutes,
              learningObjective: value,
              description,
              requirements,
              image,
              skillLevel,
              dateCreated,
              isFeatured,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle,
              published,
            };
            const result = onChange(modelFields);
            value = result?.learningObjective ?? value;
          }
          if (errors.learningObjective?.hasError) {
            runValidationTasks("learningObjective", value);
          }
          setLearningObjective(value);
        }}
        onBlur={() =>
          runValidationTasks("learningObjective", learningObjective)
        }
        errorMessage={errors.learningObjective?.errorMessage}
        hasError={errors.learningObjective?.hasError}
        {...getOverrideProps(overrides, "learningObjective")}
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
              timeHours,
              timeMinutes,
              learningObjective,
              description: value,
              requirements,
              image,
              skillLevel,
              dateCreated,
              isFeatured,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle,
              published,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              timeHours,
              timeMinutes,
              learningObjective,
              description,
              requirements: values,
              image,
              skillLevel,
              dateCreated,
              isFeatured,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle,
              published,
            };
            const result = onChange(modelFields);
            values = result?.requirements ?? values;
          }
          setRequirements(values);
          setCurrentRequirementsValue("");
        }}
        currentFieldValue={currentRequirementsValue}
        label={"Requirements"}
        items={requirements}
        hasError={errors?.requirements?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("requirements", currentRequirementsValue)
        }
        errorMessage={errors?.requirements?.errorMessage}
        setFieldValue={setCurrentRequirementsValue}
        inputFieldRef={requirementsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Requirements"
          isRequired={true}
          isReadOnly={false}
          value={currentRequirementsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.requirements?.hasError) {
              runValidationTasks("requirements", value);
            }
            setCurrentRequirementsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("requirements", currentRequirementsValue)
          }
          errorMessage={errors.requirements?.errorMessage}
          hasError={errors.requirements?.hasError}
          ref={requirementsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "requirements")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Image"
        isRequired={true}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              timeHours,
              timeMinutes,
              learningObjective,
              description,
              requirements,
              image: value,
              skillLevel,
              dateCreated,
              isFeatured,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle,
              published,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <SelectField
        label="Skill level"
        placeholder="Please select an option"
        isDisabled={false}
        value={skillLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              timeHours,
              timeMinutes,
              learningObjective,
              description,
              requirements,
              image,
              skillLevel: value,
              dateCreated,
              isFeatured,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle,
              published,
            };
            const result = onChange(modelFields);
            value = result?.skillLevel ?? value;
          }
          if (errors.skillLevel?.hasError) {
            runValidationTasks("skillLevel", value);
          }
          setSkillLevel(value);
        }}
        onBlur={() => runValidationTasks("skillLevel", skillLevel)}
        errorMessage={errors.skillLevel?.errorMessage}
        hasError={errors.skillLevel?.hasError}
        {...getOverrideProps(overrides, "skillLevel")}
      >
        <option
          children="Beginner"
          value="BEGINNER"
          {...getOverrideProps(overrides, "skillLeveloption0")}
        ></option>
        <option
          children="Intermediate"
          value="INTERMEDIATE"
          {...getOverrideProps(overrides, "skillLeveloption1")}
        ></option>
        <option
          children="Advanced"
          value="ADVANCED"
          {...getOverrideProps(overrides, "skillLeveloption2")}
        ></option>
      </SelectField>
      <TextField
        label="Date created"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={dateCreated && convertToLocal(new Date(dateCreated))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              title,
              timeHours,
              timeMinutes,
              learningObjective,
              description,
              requirements,
              image,
              skillLevel,
              dateCreated: value,
              isFeatured,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle,
              published,
            };
            const result = onChange(modelFields);
            value = result?.dateCreated ?? value;
          }
          if (errors.dateCreated?.hasError) {
            runValidationTasks("dateCreated", value);
          }
          setDateCreated(value);
        }}
        onBlur={() => runValidationTasks("dateCreated", dateCreated)}
        errorMessage={errors.dateCreated?.errorMessage}
        hasError={errors.dateCreated?.hasError}
        {...getOverrideProps(overrides, "dateCreated")}
      ></TextField>
      <SwitchField
        label="Is featured"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isFeatured}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              timeHours,
              timeMinutes,
              learningObjective,
              description,
              requirements,
              image,
              skillLevel,
              dateCreated,
              isFeatured: value,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle,
              published,
            };
            const result = onChange(modelFields);
            value = result?.isFeatured ?? value;
          }
          if (errors.isFeatured?.hasError) {
            runValidationTasks("isFeatured", value);
          }
          setIsFeatured(value);
        }}
        onBlur={() => runValidationTasks("isFeatured", isFeatured)}
        errorMessage={errors.isFeatured?.errorMessage}
        hasError={errors.isFeatured?.hasError}
        {...getOverrideProps(overrides, "isFeatured")}
      ></SwitchField>
      <TextField
        label="Image alt text"
        isRequired={false}
        isReadOnly={false}
        value={imageAltText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              timeHours,
              timeMinutes,
              learningObjective,
              description,
              requirements,
              image,
              skillLevel,
              dateCreated,
              isFeatured,
              imageAltText: value,
              trailerEmbedId,
              courseUrlTitle,
              published,
            };
            const result = onChange(modelFields);
            value = result?.imageAltText ?? value;
          }
          if (errors.imageAltText?.hasError) {
            runValidationTasks("imageAltText", value);
          }
          setImageAltText(value);
        }}
        onBlur={() => runValidationTasks("imageAltText", imageAltText)}
        errorMessage={errors.imageAltText?.errorMessage}
        hasError={errors.imageAltText?.hasError}
        {...getOverrideProps(overrides, "imageAltText")}
      ></TextField>
      <TextField
        label="Trailer embed id"
        isRequired={false}
        isReadOnly={false}
        value={trailerEmbedId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              timeHours,
              timeMinutes,
              learningObjective,
              description,
              requirements,
              image,
              skillLevel,
              dateCreated,
              isFeatured,
              imageAltText,
              trailerEmbedId: value,
              courseUrlTitle,
              published,
            };
            const result = onChange(modelFields);
            value = result?.trailerEmbedId ?? value;
          }
          if (errors.trailerEmbedId?.hasError) {
            runValidationTasks("trailerEmbedId", value);
          }
          setTrailerEmbedId(value);
        }}
        onBlur={() => runValidationTasks("trailerEmbedId", trailerEmbedId)}
        errorMessage={errors.trailerEmbedId?.errorMessage}
        hasError={errors.trailerEmbedId?.hasError}
        {...getOverrideProps(overrides, "trailerEmbedId")}
      ></TextField>
      <TextField
        label="Course url title"
        isRequired={true}
        isReadOnly={false}
        value={courseUrlTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              timeHours,
              timeMinutes,
              learningObjective,
              description,
              requirements,
              image,
              skillLevel,
              dateCreated,
              isFeatured,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle: value,
              published,
            };
            const result = onChange(modelFields);
            value = result?.courseUrlTitle ?? value;
          }
          if (errors.courseUrlTitle?.hasError) {
            runValidationTasks("courseUrlTitle", value);
          }
          setCourseUrlTitle(value);
        }}
        onBlur={() => runValidationTasks("courseUrlTitle", courseUrlTitle)}
        errorMessage={errors.courseUrlTitle?.errorMessage}
        hasError={errors.courseUrlTitle?.hasError}
        {...getOverrideProps(overrides, "courseUrlTitle")}
      ></TextField>
      <SwitchField
        label="Published"
        defaultChecked={false}
        isDisabled={false}
        isChecked={published}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              timeHours,
              timeMinutes,
              learningObjective,
              description,
              requirements,
              image,
              skillLevel,
              dateCreated,
              isFeatured,
              imageAltText,
              trailerEmbedId,
              courseUrlTitle,
              published: value,
            };
            const result = onChange(modelFields);
            value = result?.published ?? value;
          }
          if (errors.published?.hasError) {
            runValidationTasks("published", value);
          }
          setPublished(value);
        }}
        onBlur={() => runValidationTasks("published", published)}
        errorMessage={errors.published?.errorMessage}
        hasError={errors.published?.hasError}
        {...getOverrideProps(overrides, "published")}
      ></SwitchField>
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
