import { BackHandler, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useRouter } from "expo-router";
import { useState, useRef, RefObject } from "react";
import { ActivityIndicator } from "react-native-paper";
import { solveQuestion } from "./service";

function Icon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
	size: number;
	style?: any;
}) {
	return <FontAwesome {...props} />;
}

export default function Home() {
	const router = useRouter();

	const viewRef: RefObject<ScrollView> = useRef(null);

	const handleScrollToEnd = () => {
		viewRef.current?.scrollToEnd({ animated: true });
	};

	const [loading, setLoading] = useState(false);

	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");

	const makeQuestion = async () => {
		setLoading(true);

		const response = await solveQuestion(question);

		if (response) {
			setAnswer(response);
			setLoading(false);
			handleScrollToEnd();
		}
	}

	return (
		<ScrollView style={styles.container}>
			<View style={{
				marginTop: 100,
				width: "90%",
				backgroundColor: "transparent",
				marginBottom: 35,
			}}>
				<Text style={styles.headerTitle}>Ask a question</Text>

				<View style={{
					backgroundColor: "transparent",
				}}>
					<Text style={{ ...styles.headerText, fontWeight: "bold" }}>How does it work?</Text>
					<Text>
						<Text style={{ fontWeight: "bold" }}>GPT-4</Text> is a language model developed by OpenAI that uses deep learning to produce human-like text. It is the largest language model ever created, with 175 billion parameters and 10 trillion connections. It is trained on a dataset of 45 GB of internet text. It can answer any question in any idiom.
					</Text>
				</View>

				<View style={{
					backgroundColor: "transparent",
				}}>
					<Text style={{ ...styles.headerText, fontWeight: "bold", fontSize: 14, marginTop: 15 }}>Important:<Text style={{
						fontWeight: "normal",
					}}>
						The generated answers do not replace the value behind doctor instructions
					</Text>
					</Text>
				</View>
			</View>

			<View style={{
				backgroundColor: "transparent",
				marginBottom: 35,
			}}>
				<Text style={{
					fontSize: 26,
					fontWeight: "500",
				}}>What do you want to ask today?</Text>

				{/* create the equivalent to a textare */}
				<TextInput
					textAlign="left"
					style={{
						backgroundColor: "white",
						borderColor: "gray",
						borderWidth: 1,
						borderRadius: 10,
						marginTop: 10,
						paddingHorizontal: 10,
						paddingVertical: 5
					}}
					value={question}
					onChangeText={setQuestion}
					textAlignVertical="top"
					multiline={true}
					numberOfLines={8}
					returnKeyType="done"
					placeholder="Type your question here..."
				/>

				<View style={{
					width: "100%",
					marginTop: 15,
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
					backgroundColor: "transparent",
					paddingHorizontal: 10,
				}}>
					{loading ? <ActivityIndicator animating={true} color="#DC6B72" size={24} /> : <TouchableOpacity onPress={makeQuestion}>
						<Icon name="send" color="#DC6B72" size={24} />
					</TouchableOpacity>}
				</View>

				<View style={{
					backgroundColor: "transparent",
				}} ref={viewRef}>
					{question && answer ? (
						<>
							<Text style={{
								fontWeight: "bold",
								fontSize: 22,
							}}>Response:</Text>
							<Text style={{
								fontSize: 16,
							}}>
								{answer}
							</Text>
						</>
					) : (
						<>
							<Text style={{
								fontSize: 22,
								fontWeight: "500",
							}}>
								Some suggested questions:
							</Text>

							<Text>- What is the preparation for the "x" exam?</Text>
							<Text>- Which foods should be avoided in the treatment of pathology "x"?</Text>
							<Text>- What is the leaflet of medicine "x"?</Text>
						</>
					)}
				</View>

			</View>
		</ScrollView >
	);
}

