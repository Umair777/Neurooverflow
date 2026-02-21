import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import Answer from "../components/answer";
import Suggestions from "../components/suggestions";

export default function AnswerView( {question} ) {
	const navigate = useNavigate();
	return (
		 <Layout title="Answer View">
      <Answer question={question} />
      {/* <Suggestions /> */}
    </Layout>
	)
}