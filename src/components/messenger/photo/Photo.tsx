import block from "bem-cn";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { GetFileAction } from "../../../store/files/actions";
import { TelegramFile } from "../../../store/files/types";
import { RootState } from "../../../store/reducer";
import { fileSelector } from "../../../store/files/selectors";
import classNames from "classnames";
import "./styles.scss";

type OwnProps = {
  photo: TelegramFile;
  name: string;
  className?: string;
};

type DispatchProps = {
  getFile: typeof GetFileAction;
};

type StateProps = {
  file: TelegramFile;
};

type PhotoProps = OwnProps & DispatchProps & StateProps;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getFile: GetFileAction
    },
    dispatch
  );
};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    file: fileSelector(ownProps.photo.id)(state)
  };
};

@((connect as any)(mapStateToProps, mapDispatchToProps))
class ConnectedPhoto extends React.PureComponent<PhotoProps> {
  componentDidMount() {
    this.props.getFile(this.props.photo.id);
  }

  componentDidUpdate(prevProps: OwnProps) {
    if (prevProps.photo.id !== this.props.photo.id) {
      this.props.getFile(this.props.photo.id);
    }
  }

  render() {
    const { file, className, name } = this.props;

    const bem = block("rt-photo");

    const rootClassNames = classNames({
      [bem()]: true,
      [className as string]: className
    });

    return (
      <div className={rootClassNames}>
        {file ? (
          <img src={file.local.url} className={bem("image")} alt={name} />
        ) : (
          <div className={bem("placeholder")}>{name}</div>
        )}
      </div>
    );
  }
}

export const Photo = (ConnectedPhoto as unknown) as React.ComponentClass<
  OwnProps
>;
