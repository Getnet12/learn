/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
      id
      name
      courses {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
      id
      name
      courses {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
      id
      name
      courses {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateContributor = /* GraphQL */ `
  subscription OnCreateContributor(
    $filter: ModelSubscriptionContributorFilterInput
  ) {
    onCreateContributor(filter: $filter) {
      id
      jobTitle
      socialNetwork {
        platform
        url
        __typename
      }
      courses {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      bio
      profilePic
      username
      lastName
      firstName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateContributor = /* GraphQL */ `
  subscription OnUpdateContributor(
    $filter: ModelSubscriptionContributorFilterInput
  ) {
    onUpdateContributor(filter: $filter) {
      id
      jobTitle
      socialNetwork {
        platform
        url
        __typename
      }
      courses {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      bio
      profilePic
      username
      lastName
      firstName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteContributor = /* GraphQL */ `
  subscription OnDeleteContributor(
    $filter: ModelSubscriptionContributorFilterInput
  ) {
    onDeleteContributor(filter: $filter) {
      id
      jobTitle
      socialNetwork {
        platform
        url
        __typename
      }
      courses {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      bio
      profilePic
      username
      lastName
      firstName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onCreateLesson(filter: $filter) {
      id
      title
      content
      youtubeEmbedId
      chapter
      courseLesson {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
          __typename
        }
        courseTags {
          nextToken
          startedAt
          __typename
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      lessonNumber
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonCourseLessonId
      __typename
    }
  }
`;
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onUpdateLesson(filter: $filter) {
      id
      title
      content
      youtubeEmbedId
      chapter
      courseLesson {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
          __typename
        }
        courseTags {
          nextToken
          startedAt
          __typename
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      lessonNumber
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonCourseLessonId
      __typename
    }
  }
`;
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
    onDeleteLesson(filter: $filter) {
      id
      title
      content
      youtubeEmbedId
      chapter
      courseLesson {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
          __typename
        }
        courseTags {
          nextToken
          startedAt
          __typename
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      lessonNumber
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonCourseLessonId
      __typename
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
      id
      title
      timeHours
      timeMinutes
      learningObjective
      description
      requirements
      image
      contributors {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      courseTags {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      skillLevel
      dateCreated
      isFeatured
      imageAltText
      trailerEmbedId
      courseUrlTitle
      published
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
      id
      title
      timeHours
      timeMinutes
      learningObjective
      description
      requirements
      image
      contributors {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      courseTags {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      skillLevel
      dateCreated
      isFeatured
      imageAltText
      trailerEmbedId
      courseUrlTitle
      published
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
      id
      title
      timeHours
      timeMinutes
      learningObjective
      description
      requirements
      image
      contributors {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      courseTags {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      skillLevel
      dateCreated
      isFeatured
      imageAltText
      trailerEmbedId
      courseUrlTitle
      published
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCourseTag = /* GraphQL */ `
  subscription OnCreateCourseTag(
    $filter: ModelSubscriptionCourseTagFilterInput
  ) {
    onCreateCourseTag(filter: $filter) {
      id
      tagID
      courseID
      tag {
        id
        name
        courses {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
          __typename
        }
        courseTags {
          nextToken
          startedAt
          __typename
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCourseTag = /* GraphQL */ `
  subscription OnUpdateCourseTag(
    $filter: ModelSubscriptionCourseTagFilterInput
  ) {
    onUpdateCourseTag(filter: $filter) {
      id
      tagID
      courseID
      tag {
        id
        name
        courses {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
          __typename
        }
        courseTags {
          nextToken
          startedAt
          __typename
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCourseTag = /* GraphQL */ `
  subscription OnDeleteCourseTag(
    $filter: ModelSubscriptionCourseTagFilterInput
  ) {
    onDeleteCourseTag(filter: $filter) {
      id
      tagID
      courseID
      tag {
        id
        name
        courses {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
          __typename
        }
        courseTags {
          nextToken
          startedAt
          __typename
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateContributorCourse = /* GraphQL */ `
  subscription OnCreateContributorCourse(
    $filter: ModelSubscriptionContributorCourseFilterInput
  ) {
    onCreateContributorCourse(filter: $filter) {
      id
      contributorID
      courseID
      contributor {
        id
        jobTitle
        socialNetwork {
          platform
          url
          __typename
        }
        courses {
          nextToken
          startedAt
          __typename
        }
        bio
        profilePic
        username
        lastName
        firstName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
          __typename
        }
        courseTags {
          nextToken
          startedAt
          __typename
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateContributorCourse = /* GraphQL */ `
  subscription OnUpdateContributorCourse(
    $filter: ModelSubscriptionContributorCourseFilterInput
  ) {
    onUpdateContributorCourse(filter: $filter) {
      id
      contributorID
      courseID
      contributor {
        id
        jobTitle
        socialNetwork {
          platform
          url
          __typename
        }
        courses {
          nextToken
          startedAt
          __typename
        }
        bio
        profilePic
        username
        lastName
        firstName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
          __typename
        }
        courseTags {
          nextToken
          startedAt
          __typename
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteContributorCourse = /* GraphQL */ `
  subscription OnDeleteContributorCourse(
    $filter: ModelSubscriptionContributorCourseFilterInput
  ) {
    onDeleteContributorCourse(filter: $filter) {
      id
      contributorID
      courseID
      contributor {
        id
        jobTitle
        socialNetwork {
          platform
          url
          __typename
        }
        courses {
          nextToken
          startedAt
          __typename
        }
        bio
        profilePic
        username
        lastName
        firstName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
          __typename
        }
        courseTags {
          nextToken
          startedAt
          __typename
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
