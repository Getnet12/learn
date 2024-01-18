/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getContributor = /* GraphQL */ `
  query GetContributor($id: ID!) {
    getContributor(id: $id) {
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
export const listContributors = /* GraphQL */ `
  query ListContributors(
    $filter: ModelContributorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContributors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncContributors = /* GraphQL */ `
  query SyncContributors(
    $filter: ModelContributorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContributors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLessons = /* GraphQL */ `
  query SyncLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCourseTag = /* GraphQL */ `
  query GetCourseTag($id: ID!) {
    getCourseTag(id: $id) {
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
export const listCourseTags = /* GraphQL */ `
  query ListCourseTags(
    $filter: ModelCourseTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagID
        courseID
        tag {
          id
          name
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCourseTags = /* GraphQL */ `
  query SyncCourseTags(
    $filter: ModelCourseTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourseTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tagID
        courseID
        tag {
          id
          name
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getContributorCourse = /* GraphQL */ `
  query GetContributorCourse($id: ID!) {
    getContributorCourse(id: $id) {
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
export const listContributorCourses = /* GraphQL */ `
  query ListContributorCourses(
    $filter: ModelContributorCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContributorCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contributorID
        courseID
        contributor {
          id
          jobTitle
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncContributorCourses = /* GraphQL */ `
  query SyncContributorCourses(
    $filter: ModelContributorCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContributorCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        contributorID
        courseID
        contributor {
          id
          jobTitle
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
      nextToken
      startedAt
      __typename
    }
  }
`;
