// @flow
import * as React from 'react';
import { View } from 'react-native';
import {
  Card,
  CardContent,
  CardCover,
  Title,
  Paragraph
} from 'react-native-paper';
import { DateTime } from 'luxon';
import { withNavigation } from 'react-navigation';

const taskTypeToDisplayName = (type) => {
  switch (type) {
    case 'IMAGE_TAGGING':
      return 'Image tagging';
    case 'MARKETING_SURVEY':
      return 'Marketing survey';
    default:
      return '';
  }
};

type Props = { navigation: any, task: any };

class FinishedTaskItem extends React.Component<Props> {
  render() {
    const { task } = this.props;
    return (
      <Card style={{ marginHorizontal: 16, marginBottom: 8 }}>
        <View style={{ flexDirection: 'row' }}>
          <CardContent style={{ flex: 1, paddingVertical: 10 }}>
            <Title style={{ fontSize: 20, lineHeight: 26 }}>{task.name}</Title>
            <Paragraph style={{ fontSize: 13, lineHeight: 14 }}>
              {taskTypeToDisplayName(task.type)}
            </Paragraph>
            <Paragraph style={{ fontSize: 13, lineHeight: 14 }}>
              Available until{' '}
              {DateTime.fromJSDate(task.dueDate).toFormat('LLL dd')}
            </Paragraph>
            <Paragraph style={{ fontSize: 13, lineHeight: 14 }}>
              Posted by {task.issuer}
            </Paragraph>
          </CardContent>
          <CardCover
            style={{ width: 144, height: 108 }}
            source={{ uri: task.preview, cache: 'force-cache' }}
          />
        </View>
      </Card>
    );
  }
}

export default withNavigation(FinishedTaskItem);
