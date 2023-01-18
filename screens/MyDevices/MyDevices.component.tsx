import { useEffect, useState } from "react";
import { View, ScrollView, ToastAndroid } from "react-native";
import { ListItem, Button } from "@react-native-material/core";
import { createAPIEndpoint, ENDPOINTS } from "../../services/api.service";
import * as SecureStore from "expo-secure-store";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import Menu from "../../components/Menu/Menu.component";

import MyDevicesStyles from "./MyDevices.styles";

interface AssetRequest {
  asset_id: "string";
  employee_id: "string";
  id: "string";
  remarks: "string";
  status: "string";
}

const MyDevices: React.FC = ({ navigation }: any) => {
  const [assetRequests, setAssetRequests] = useState([] as AssetRequest[]);
  const [loading, setLoading] = useState(false);

  const getAssetRequests = async () => {
    const token = await SecureStore.getItemAsync("access");
    if (token) {
      const response = await createAPIEndpoint(ENDPOINTS.ASSETREQUEST).fetchAll(
        token
      );
      setAssetRequests(response.data.data);
    }
  };

  useEffect(() => {
    getAssetRequests();

    const willRefetchOnFocus = navigation.addListener("focus", () => {
      getAssetRequests();
    });

    return willRefetchOnFocus;
  }, []);

  const handleSubmit = async (id: string) => {
    setLoading(true);
    const token = await SecureStore.getItemAsync("access");
    if (token) {
      createAPIEndpoint(ENDPOINTS.DELETEASSETREQUEST)
        .delete(id, token)
        .then(() => {
          getAssetRequests();
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      navigation.navigate("Home");
      ToastAndroid.show("Session Expired.", ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView>
      <View style={MyDevicesStyles.container}>
        <Menu>
          <Button
            title="Product List"
            onPress={() => navigation.navigate("Product List")}
          />
        </Menu>
      </View>
      {assetRequests.map((assetRequest) => (
        <ListItem
          key={Math.random()}
          title={`Serial: ${assetRequest.asset_id}`}
          secondaryText={`Remarks: ${assetRequest.remarks}`}
          trailing={
            assetRequest.status.toLowerCase() === "pending"
              ? () => (
                  <Button
                    title="X"
                    leading={(props) => (
                      <Icon
                        name="delete"
                        {...props}
                        style={MyDevicesStyles.icon}
                      />
                    )}
                    onPress={() => handleSubmit(assetRequest.id)}
                    style={MyDevicesStyles.button}
                    loading={loading}
                    disabled={loading}
                  />
                )
              : null
          }
          style={MyDevicesStyles.container}
        />
      ))}
    </ScrollView>
  );
};

export default MyDevices;
