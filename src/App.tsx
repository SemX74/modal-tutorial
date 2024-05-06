import "./App.css";
import useModal from "./hooks/useModal";
import Posts from "./components/Posts";
import SubscribeAlertModal from "./components/SubscribeAlertModal";

function App() {
  const modalProps = useModal();

  return (
    <body className="flex flex-col min-h-[130vh]">
      <h1 className="z-50">HAHA!</h1>
      <div className="mt-12">
        <h1 className="text-center">My posts here!</h1>
        <button onClick={modalProps.onOpen} className="my-4">
          Open modal!
        </button>
      </div>
      <Posts />
      <SubscribeAlertModal {...modalProps} />
    </body>
  );
}

export default App;
