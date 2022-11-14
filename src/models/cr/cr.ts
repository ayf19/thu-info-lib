export interface CrTimetableEvent {
    stage: string;      // 阶段
    begin: string;      // 开始时间 yyyy-MM-dd HH:mm
    end: string;        // 结束时间 yyyy-MM-dd HH:mm
    messages: string[]; // 特别提示
}

export interface CrTimetable {
    semester: string;           // 学年学期
    undergraduate: boolean;     // 适用于本科生
    graduate: boolean;          // 适用于研究生
    events: CrTimetableEvent[]; // 选课事件
}

export interface CoursePlan {
    id: string;        // 课程号
    name: string;      // 课程名
    property: string;  // 课程属性
    credit: number;    // 学分
    group: string;     // 所属课组
}

export interface CrSemester {
    id: string;
    name: string;
}

export interface SearchParams {
    semester: string;   // 学年学期
    id?: string;        // 课程号
    name?: string;      // 课程名
    dayOfWeek?: number; // 上课星期（1~7）
    period?: number;    // 上课节次（1~6）
    page?: number;      // 页数
}

export interface CrRemainingInfo {
    id: string;        // 课程号
    seq: number;       // 课序号
    name: string;      // 课程名
    capacity: number;  // 课容量
    remaining: number; // 课余量
    queue: number;     // 队列人数
    teacher: string;   // 任课老师
    time: string;      // 上课时间
}

export interface CrPrimaryOpenInfo {
    department: string;  // 开课院系
    id: string;          // 课程号
    seq: number;         // 课序号
    name: string;        // 课程名
    credits: number;     // 学分
    teacher: string;     // 任课老师
    bksCap: number;      // 本科生课容量
    yjsCap: number;      // 研究生课容量
    time: string;        // 上课时间
    note: string;        // 选课文字说明
    feature: string;     // 课程特色
    year: string;        // 年级
    secondary: string;   // 是否二级选课
    reUseCap: string;    // 重修是否占容量
    restrict: string;    // 是否选课时限制
    culture: string;     // 本科文化素质课组
}

export interface CrSearchResultInfo extends CrRemainingInfo, CrPrimaryOpenInfo {}

export interface CrRemainingSearchResult {
    currPage: number;
    totalPage: number;
    totalCount: number;
    courses: CrRemainingInfo[];
}

export interface CrPrimaryOpenSearchResult {
    currPage: number;
    totalPage: number;
    totalCount: number;
    courses: CrPrimaryOpenInfo[];
}

export interface CrSearchResult {
    currPage: number;
    totalPage: number;
    totalCount: number;
    courses: CrSearchResultInfo[];
}

export interface SelectedCourse {
    type: string;        // 选课属性
    will: 1 | 2 | 3;     // 选课志愿
    id: string;          // 课程号
    seq: string;         // 课序号
    name: string;        // 课程名
    time: string;        // 上课时间
    teacher: string;     // 教室名
    credit: number;      // 学分
    secondary: boolean;  // 是否二级选课
}

export type SearchCoursePriorityQuery = {
    selected: false,
    isSports: boolean,
    page?: number,
    courseId?: string,
    courseSeq?: string,
    courseName?: string,
    departmentId?: string,
} | {
    selected: true,         // 已选课程
    isSports: boolean,      // 是否为体育
};

type SelectedCount = [number, number, number, number];  // 优先，第一，第二，第三

export interface SearchCoursePriorityResult {
    courseId: string;           // 课程号
    courseSeq: string;          // 课序号
    courseName: string;         // 课程名
    departmentName: string;     // 开课系
    capacity: number;           // 课容量
    bxSelected: SelectedCount;  // 必修报名人数
    xxSelected: SelectedCount;  // 限选报名人数
    rxSelected: SelectedCount;  // 任选报名人数
}

export interface QueueInfo {
    property: string;     // 选课属性
    will: 1 | 2 | 3;      // 选课志愿
    courseId: string;     // 课程号
    courseSeq: string;    // 课序号
    courseName: string;   // 课程名
    inQueue: number;      // 队列人数
    position: number;     // 本人所在位置
    time: string;         // 上课时间
    teacher: string;      // 任课教师
}
