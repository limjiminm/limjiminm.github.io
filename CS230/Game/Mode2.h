/*
Copyright (C) 2023 DigiPen Institute of Technology
Reproduction or distribution of this file or its contents without
prior written consent is prohibited
File Name:  Mode2.h
Project:    CS230 Engine
Author:     Jonathan Holmes , Jimin Lim(jimin.lim@digipen.edu)
Created:    March 8, 2023
Updated:    March 16, 2023
*/

#pragma once
#include "../Engine/GameState.h"

class Mode2 : public CS230::GameState {
public:
    Mode2();
    void Load() override;
    void Update() override;
    void Unload() override;

    std::string GetName() override { return "Mode2"; }
public:
    
};

