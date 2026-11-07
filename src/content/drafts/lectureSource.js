// Shared citation for the unpublished species drafts.
// This is a supplemental lecture, not clinic protocol and not approved content.

export const DATED_SOURCE_NOTICE = 'Lecture from 2020 using the 2014 textbook. See the Current notes.'

export const lectureVideo = {
  url: 'https://youtu.be/fBiSVCKSn7k',
  title: "McCurnin's Chapter 23, Care of Exotic Animals",
  organization: 'Sinclair College Veterinary Technology',
  uploaded: 'July 24, 2020',
  duration: '1:03:49',
  textbook: "McCurnin's Clinical Textbook for Veterinary Technicians, 2014 edition",
  role: 'Supplemental dated lecture. Not clinic protocol and not approved clinical content.',
}

export function lectureSegment(segmentStart, segmentEnd, topicTimestamps = []) {
  return { ...lectureVideo, segmentStart, segmentEnd, topicTimestamps }
}
