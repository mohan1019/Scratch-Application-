import React from "react";
import Functions from "./components/Functions";
import MidArea from "./components/MidArea";
import SpriteView from "./components/SpriteView";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App({ complist, update_list }) {

  const onDragEnd = (result) => {
    let element = result.draggableId.split("-")[0];

    const old_list = complist.midAreaLists;
    let source_index = old_list.findIndex(
      (x) => x.id === result.source.droppableId
    );
    if (source_index > -1) {
      let comp_list = old_list[source_index].comps;
      comp_list.splice(result.source.index, 1);
      old_list[source_index].comps = comp_list;
    }

    let dest_index = old_list.findIndex(
      (x) => x.id === result.destination.droppableId
    );

    if (dest_index > -1) {
      let dest_comp_list = old_list[dest_index].comps;
      dest_comp_list.splice(result.destination.index, 0, `${element}`);

      old_list[dest_index].comps = dest_comp_list;
    }
  };
  return (
    <div className="bg-green-100 font-sans">
      <div>
        <AppBar position="static"  style={{ background: '#2E3B55' }}>
          <Toolbar variant="dense" >
            <Typography variant="h6" sx={{m: "20"}}  >
              Juspay React Assignment 
            </Typography>
             </Toolbar>
        </AppBar>

      </div>
      <div className="h-screen overflow-hidden flex flex-row pt-6">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Functions />
            <MidArea />
          </div>
          <div className="w-1/3 relative h-screen overflow-scroll flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <SpriteView />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    complist: state.list,
  };
};

export default connect(mapStateToProps)(App);
